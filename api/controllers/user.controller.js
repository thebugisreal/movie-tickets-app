// User Model
const User = require('../models/user.model.js');

// @controller   Get all users
// @access       Public
module.exports.get = (req, res) => {
	User.find()
		.then(users => res.json(users));
}

// @controller   Create new user
// @access       Public
module.exports.create = (req, res) => {
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		name: req.body.name,
		phone: req.body.phone
	});

	newUser.save()
		.then(user => res.json({success: true, user: user}))
		.catch(err => res.status(404).json({success: false, error: err.message}));
}

// @controller   Update user info
// @access       Public
module.exports.update = (req, res) => {
	User.updateOne(
		{ '_id': req.params.id },
		{ $set: { 'password': req.body.password, 'name': req.body.name }}
	)
	.then(user => res.json({success: true}))
	.catch(err => res.status(404).json({success: false, error: err.message}));
}

// @controller   Delete a user
// @access       Public
module.exports.delete = (req, res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success: false, error: err.message}));
}