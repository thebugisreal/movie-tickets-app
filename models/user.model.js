const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		default: 'http://i.pravatar.cc/120'
	},
	phone: String,
	address: String
});

const User = mongoose.model('User', userSchema, 'users'); // The third parameter is name of collection on mongodb database

module.exports = User;