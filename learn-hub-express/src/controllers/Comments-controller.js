const Servicio = require('../database/models/Servicio');
const comment = require('../services/Comment-service');
const express = require('express');

// Get all comments
exports.getAllCommentsUser = async (req, res) => {
  try {
    let serviceId = req.query.id;
    const comments = await comment.getComments(serviceId); // tienen que tener en el body un id de user
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all comment in the service
exports.getCommentByService = async (req, res) => {
  try {
    // console.log("llegue al back");
    // console.log(req.query.id);
    const comments = await comment.getCommentsByService(req);
     // id de un servisio 
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create comment
exports.createComment = async (req, res) => {
  try {
    const comments = await comment.createComment(req.body);
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a comment
exports.updateComment = async (req, res) => {
  try {
    const comments = await comment.updateComment(req.body);
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    let body = {
      commentId: req.query.commentId,
      serviceId: req.query.serviceId,
    }
    const comments = await comment.deleteComment(body)// deberia ser un id
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

