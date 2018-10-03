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
	phone: String
});

module.exports = User = mongoose.model('user', userSchema);