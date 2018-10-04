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
	phone: String,
	products: {
		type: Array,
		default: []
	}
});

module.exports = User = mongoose.model('users', userSchema);