const express = require('express');
const router = express.Router();

const controller = require('../controllers/post.controller');

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', controller.getPosts);

// @route   POST api/posts
// @desc    Add new post
// @access  Public
router.post('/', controller.addPost);

// export router to use on server.js *important!
module.exports = router;
















// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
// router.get('/:id', controller.getPost);

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Public
// router.delete('/:id', controller.deletePost);

