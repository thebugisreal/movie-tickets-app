const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/user.model.js');

// @route   GET apt/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users));
});

// @route   POST apt/users
// @desc    Create new user
// @access  Public
router.post('/', (req, res) => {
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		name: req.body.name,
		phone: req.body.phone
	});

	newUser.save()
		.then(user => res.json({success: true, user: user}))
		.catch(err => res.status(404).json({success: false, error: err.message}));
});

// @route   PATCH apt/users/:id
// @desc    Update user info
// @access  Public
router.patch('/:id', (req, res) => {
	User.updateOne(
		{ '_id': req.params.id },
		{ $set: { 'password': req.body.password, 'name': req.body.name }}
	)
	.then(user => res.json({success: true}))
	.catch(err => res.status(404).json({success: false, error: err.message}));
});

// @route   DELETE apt/users/:id
// @desc    Delete a user
// @access  Public
router.delete('/:id', (req, res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success: false, error: err.message}));
});





module.exports = router;