const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', controller.get);

// @route   POST api/users
// @desc    Create new user
// @access  Public
router.post('/', controller.create);

// @route   PATCH api/users/:id
// @desc    Update user info
// @access  Public
router.patch('/:id', controller.update);

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Public
router.delete('/:id', controller.delete);

module.exports = router;