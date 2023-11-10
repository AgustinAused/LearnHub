const express = require('express');
const commentController = require('../controllers/Comments-controller');
const router = express.Router();
const Authentication = require('../auth/authentication')



//Comments router
/* GET Comments listing. */
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/comments-router');
});

// Get all comments
router.get('/all', commentController.getAllCommentsUser);
// Create new comment
router.post('/new/:id_user', Authentication, commentController.createComment);
// Get all comment in the service
router.get('/service/:id_service', commentController.getCommentByService);
// Update a comment
router.put('/update/:id', Authentication, commentController.updateComment);
// Delete a comment
router.delete('/delete/:id', Authentication, commentController.deleteComment);
// Change State
router.put('/changeState/:id', Authentication, commentController.changeState);


module.exports = router;




module.exports = router;