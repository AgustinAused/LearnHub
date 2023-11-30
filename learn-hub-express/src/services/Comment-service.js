
const Comment = require('../database/models/Comentario');
const Service = require('../database/models/Servicio');
const User = require('../database/models/Usuario');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the comment list
exports.getComments = async function(service_id){ //
    try {
        var comment = await Comment.find({_id : service_id, state : "true"});
        // Return the comment list that was retured by the mongoose promise
        return comment;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error('Error while getting comment')
    }  
}

// Async function to get comments by service
exports.getCommentsByService = async function(service_id){ // only use proffesor 
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
    try{
        // Extract the service id
        console.log(comment);
        let serviceId = comment.serviceId;
        // Creating a new Mongoose Object by using the new keyword
        var newComment = new Comment({
            name: comment.name,
            content: comment.opinion,
            date: new Date(),
            score: comment.rating,
            email: comment.email,
            state: false
            });
        // Saving the comment 
        console.log(newComment);
        var savedComment = await newComment.save();
        // Update the service comments
        let updatedService = await Service.findByIdAndUpdate(
            // Find the service by ID
            {_id: serviceId},
            { $push: { comments: savedComment._id, ref: 'Comentarios' } },
            { new: true }
        );
        console.log(updatedService);
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
    try {
        // Find the comment by ID
        const comment = await Comment.findById(id);
        // Check if the comment exists
        if (!comment) {
            throw Error('Comment not found');
        }
        // Update the state of the comment
        comment.state = true; // Assuming 'true' is a boolean value
        // Save the updated comment
        const savedComment = await comment.save();

        // Updare the comment in service
        let _service = await Service.findOne({comments : id});
        _service.comments.pull(id);
        _service.comments.push(savedComment);
        await _service.save();
        // Update the comment in user
        let _user = await User.findOne({service:_service});
        _user.comments.pull(_service._id);
        _user.comments.push(savedComment);
        await _user.save();
        // Return the saved comment
        return savedComment;
    } catch (e) {
        // Handle errors and throw an error message
        console.error(e);
        throw Error("Error occurred while changing the comment state");
    }
}