const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new schema
const userSchema = new Schema({
	userName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// export schema to use on user.controller.js
module.exports = User = mongoose.model('User', userSchema, 'users');