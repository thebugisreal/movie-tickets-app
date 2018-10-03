const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	author: {
		type: String,
		default: 'Admin'
	},
	body: {
		type: String,
		required: true
	},
	thumbnail: {
		type: String,
		default: 'https://via.placeholder.com/350x350'
	},
	tags: [{ type: String }],
	comments: [
		{ 
			user: String,
			avatar: String,
			date: Date,
			body: String
		}
	]
});

const Post = mongoose.model('Post', postSchema, 'posts'); // The third parameter is name of collection on mongodb database

module.exports = Post;