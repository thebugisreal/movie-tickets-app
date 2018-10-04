// User Model
const User = require('../models/user.model.js');

// @controller   GET api/users
// @desc         Get all users
module.exports.getAllUser = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

// @controller   GET api/users
// @desc         Get user by id, if can't find, default return false
module.exports.getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch(err) {
		res.json(err);
	}
};

// @controller   POST api/users
// @desc         Create new user
module.exports.createUser = async (req, res) => {
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		name: req.body.name,
		phone: req.body.phone
	});
	try {
		const user = await newUser.save();
		res.json({success: true, user: user});
	} catch(err) {
		res.status(404).json({success: false, error: err.message});
	}
};

// @controller   PATCH api/users/:id
// @desc         Update user info, import into an Object with key are: update
module.exports.updateUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findOneAndUpdate(
			{'_id': id }, { $set: req.body.update }, { new: true }
		)
		res.json({user: user});
	} catch(err) {
		res.status(404).json({success: false, error: error.message});
	}
};

// @controller   DELETE api/users/:id
// @desc         Delete a user
module.exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		user.remove().then(() => res.json({success: true}));
	} catch(err) {
		res.status(404).json({success: false, error: err.message});
	}
};