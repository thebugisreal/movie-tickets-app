const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new schema
const userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
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
	},
	birthday: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	tickets: {
		type: Array,
		default: []
	}
});

// export schema to use on user.controller.js
module.exports = User = mongoose.model('User', userSchema, 'users');