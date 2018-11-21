// Post Model
const Post = require('../models/post.model.js');

// Get all posts
module.exports.getPosts = async (req, res) => {
	const posts = await Post.find();
	res.json(posts);
};

// Add new post
module.exports.addPost = async (req, res) => {
	const newPost = new Post({
    title: req.body.title,
		body: req.body.body,
		slug: req.body.slug,
		thumbnail: req.body.thumbnail,
		image: req.body.image,
		timeLimit: req.body.timeLimit
  });
	try {
    const post = await newPost.save();
		res.json({success: true, post: post});
	} catch(err) {
		res.status(404).json({success: false, error: err.message});
	}
};











// Get post by id
// module.exports.getPost = async (req, res) => {
// 	try {
// 		const post = await Post.findById(req.params.id);
// 		res.json(post);
// 	} catch(err) {
// 		res.json(err);
// 	}
// };

// Delete a post
// module.exports.deletePost = async (req, res) => {
// 	try {
// 		const post = await Post.findById(req.params.id);
// 		post.remove().then(() => res.json({success: true}));
// 	} catch(err) {
// 		res.status(404).json({success: false, error: err.message});
// 	}
// };