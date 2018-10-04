// User Model
const User = require('../models/user.model.js');

// @controller   GET api/users
// @desc         Get all users
module.exports.getAllUser = (req, res) => {
	User.find()
		.then(users => res.json(users));
};

// @controller   GET api/users
// @desc         Get user by id, if can't find, default return false
module.exports.getUser = (req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(user));
};

// @controller   POST api/users
// @desc         Create new user
module.exports.createUser = (req, res) => {
	const newUser = new User({
		email: req.body.email,
		password: req.body.password,
		name: req.body.name,
		phone: req.body.phone
	});

	newUser.save()
		.then(user => res.json({success: true, user: user}))
		.catch(err => res.status(404).json({success: false, error: err.message}));
};

// @controller   PATCH api/users/:id
// @desc         Update user info, import into an Object
module.exports.updateUser = (req, res) => {
	const id = req.params.id;
	User.findOneAndUpdate(
		{'_id': id }, { $set: req.body.update }, { new: true }, (error, doc) => {
			if (error) return res.status(404).json({success: false, error: error.message});
			res.json({success: true, user: doc});
		}
	)
};

// @controller   DELETE api/users/:id
// @desc         Delete a user
module.exports.deleteUser = (req, res) => {
	User.findById(req.params.id)
		.then(user => user.remove().then(() => res.json({success: true})))
		.catch(err => res.status(404).json({success: false, error: err.message}));
};