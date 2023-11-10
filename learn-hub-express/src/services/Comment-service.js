
const Comment = require('../database/models/Comentario');
const Service = require('../database/models/Servicio');
const User = require('../database/models/Usuario');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the comment list
exports.getComments = async function(){
    try {
        var comment = await Comment.find({state : "true"});
        // Return the comment list that was retured by the mongoose promise
        return comment;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error('Error while getting comment')
    }  
}

// Async function to get comments by service
exports.getCommentsByService = async function(service_id){
    let comments = []
    try{
        // Find the service 
        console.log("service:",service_id); // 
        let _service = await Service.findOne({_id : service_id});
        console.log(_service)
        // Get the comment list 
        comments = _service.comments;
        // Return the comment list that was retured by the mongoose promise
        return comments;
    } catch(e){
        // return a Error message describing the reason
        console.log(e)     
        throw Error('Error while getting comment');
    }
};

// Async function create comment

exports.createComment = async function(comment){
    // Creating a new Mongoose Object by using the new keyword
    var newComment = new Comment({
        contenido: comment.contenido,
        date: new Date(),
        calificacion: comment.calificacion,
        email: comment.email,
        state: ""
        });
    try{
        // Saving the comment 
        var savedComment = await newComment.save();
        // Update the service comments
        let _service = await Service.findOne({_id : comment.service});
        _service.comments.push(savedComment);
        await _service.save();
        return savedComment;
    }catch(e){
        // return a Error message describing the reason 
        console.log(e)     
        throw Error("Error while Creating comment")
    }
}


// Async function delete comment
exports.deleteComment = async function(id){
    // Delete the comment
    try{
        var deleted = await Comment.remove({_id: id})
        if(deleted.n === 0){
            throw Error("Comment Could not be deleted")
        }
        // Update the service comments
        let _service = await Service.findOne({comments : id});
        _service.comments.pull(id);
        await _service.save();
        // Update the user comments
        let _user = await User.findOne({comments : id});
        _user.comments.pull(id);
        await _user.save();
        return deleted
    }catch(e){
        console.log(e)
        throw Error("Error Occured while Deleting the comment")
    }
}


// Async function change state
exports.changeState = async function(id){
    // Delete the comment
    try{
        var _comment = await Comment.findById(id);
        _comment.state = 'true';
        var savedComment = await _comment.save();
        return savedComment;
    }catch(e){
        console.log(e)
        throw Error("Error Occured while changing the comment state")
    }
}