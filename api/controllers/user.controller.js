// User Model
const User = require('../models/user.model.js');

// Get all users
module.exports.getAllUser = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

// Get user by id
module.exports.getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch(err) {
		res.json(err);
	}
};

// Create new user
module.exports.createUser = async (req, res) => {
	const newUser = new User({
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password
	});
	try {
		const user = await newUser.save();
		res.json({success: true, user: user});
	} catch(err) {
		res.status(404).json({success: false, error: err.message});
	}
};

// Update user info, import into an Object with key are: update
// module.exports.updateUser = async (req, res) => {
// 	try {
// 		const user = await User.findOneAndUpdate(
// 			{ '_id': req.params.id }, { $set: req.body.update }, { new: true }
// 		)
// 		res.json({user: user});
// 	} catch(err) {
// 		res.status(404).json({success: false, error: err.message});
// 	}
// };

// Delete a user
// module.exports.deleteUser = async (req, res) => {
// 	try {
// 		const user = await User.findById(req.params.id);
// 		user.remove().then(() => res.json({success: true}));
// 	} catch(err) {
// 		res.status(404).json({success: false, error: err.message});
// 	}
// };

// Add new ticket for user
// module.exports.addTicket = async (req, res) => {
// 	try {
// 		const user = await User.findOneAndUpdate(
// 			{ '_id': req.params.id }, { $push: { tickets: req.body.ticket } }, { new: true }
// 		)
// 		res.json({user: user});
// 	} catch(err) {
// 		res.status(404).json({success: false, error: err.message});
// 	}
// };