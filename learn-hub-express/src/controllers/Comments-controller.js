const comment = require('../services/Comment-service');

// Get all comments
exports.getAllCommentsUser = async (req, res) => {
  try {
    const comments = await comment.getComment();
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all comment in the service
exports.getCommentByService = async (req, res) => {
  try {
    const comment = await comment.getCommentByService(req.body);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create comment
exports.createComment = async (req, res) => {
  try {
    const comment = await comment.createComment(req.body);
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a comment
exports.updateComment = async (req, res) => {
  try {
    const comment = await comment.updateComment(req.body);
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const comment = await comment.deleteComment(req.body)// deberia ser un id
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Change State
exports.changeState = async (req, res) => {
  try {
    const comment = await comment.changeState(req.body);
    res.status(200).json(comment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

