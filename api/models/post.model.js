const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: String,
	slug: String,
	thumbnail: String,
	image: String,
	timeLimit: String
});

const Post = mongoose.model('Post', postSchema, 'posts'); // The third parameter is name of collection on mongodb database

module.exports = Post;