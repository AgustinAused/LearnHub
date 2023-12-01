
const Comment = require('../database/models/Comentario');
const Service = require('../database/models/Servicio');
const User = require('../database/models/Usuario');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the comment list
exports.getComments = async function(service_id){ //
    try {
        let _service = Service.findById({_id : service_id}).populate('servicios');
        let comments = _service.comments;
        // Return the comment list that was retured by the mongoose promise
        return comments;
    } catch (e) {
        // return a Error message describing the reason
        console.log(e)
        throw Error('Error while getting comment')
    }  
} // para usar en los post de los servicos

// Async function to get comments by service
exports.getCommentsByService = async function(req){ // only use proffesor 
    let serviceId = req.query.id;
    // let comments = []
    try{
        // Find the service 
        console.log("service:",serviceId); // 
        let service = await Service.findOne({_id : serviceId});
        console.log(service);
        // Get the comment list 
        let comments = await Comment.find({_id : service.comments});
        // Return the comment list that was retured by the mongoose promise 
        return { title: service.name , comments : comments,
        };;
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

        // Update the user service
        let updateUser = await User.findByIdAndUpdate(
            {_id : updatedService.responsable},
            { $set:{service:updatedService._id}},
            { new: true }
        )
        // Return the saved comment

        console.log(updatedService);
        return savedComment;
    }catch(e){
        // return a Error message describing the reason 
        console.log(e)     
        throw Error("Error while Creating comment")
    }
}


// Async function delete comment
exports.deleteComment = async function(body){
    // Delete the comment
    try{
        let deleted = await Comment.findByIdAndDelete({_id : body.commentId});
        if(deleted.n === 0){
            throw Error("Comment Could not be deleted")
        }
        // update service 
        let updatedService = await Service.findById(body.serviceId)
        updatedService.comments.pull(body.commentId);
        await updatedService.save();

        // update user
        let updatedUser = await User.findById(updatedService.responsable);
        updatedUser.services.pull(updatedService._id);
        await updatedUser.save();
        // Return the deleted comment
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