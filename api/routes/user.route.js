const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');

// @route   POST api/users/sign-up
// @desc    Create new user
// @access  Public
router.post('/sign-up', validate.checkUserName, validate.checkEmail, controller.createUser);

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post('/login', controller.userLogin);

// export router to use on server.js *important!
module.exports = router;












// @route   GET api/users
// @desc    Get all users
// @access  Public
// router.get('/', controller.getAllUser);

// @route   GET api/users/:id
// @desc    Get user by id
// @access  Public
// router.get('/:id', controller.getUser);

// @route   PATCH api/users/update/:id
// @desc    Update user info
// @access  Public
// router.patch('/update/:id', controller.updateUser);

// @route   PATCH api/users/new-ticker/:id
// @desc    Add new ticket for user
// @access  Public
// router.patch('/new-ticket/:id', controller.addTicket);

// @route   DELETE api/users/:id
// @desc    Delete a user
// @access  Public
// router.delete('/:id', controller.deleteUser);

