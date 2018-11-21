// User Model
const User = require('../models/user.model.js');

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

// User login
module.exports.userLogin = (req, res) => {
	const userName = req.body.userName;
	const password = req.body.password;

	User.findOne({ userName: userName }, function(err, obj) {
    if(!obj) return res.json({success: false, errors: {
      userName: 'User name không tồn tại.',
      password: null
		}});

		if(obj.password !== password) return res.json({success: false, errors: {
			userName: null,
			password: 'Sai mật khẩu. Vui lòng thử lại.'
		}});

		res.json({success: true, user: obj});
  })
};
















// Get all users
// module.exports.getAllUser = async (req, res) => {
// 	const users = await User.find();
// 	res.json(users);
// };

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