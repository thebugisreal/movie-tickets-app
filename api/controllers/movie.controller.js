// Movie Model
const Movie = require('../models/movie.model.js');

// Get all movies
module.exports.getMovies = async (req, res) => {
	const movies = await Movie.find();
	res.json(movies);
};

// Add new movie
module.exports.addMovie = async (req, res) => {
	const newMovie = new Movie({
    name: req.body.name,
    director: req.body.director,
    cast: req.body.cast,
    genre: req.body.genre,
    releaseDate: req.body.releaseDate,
    runningTime: req.body.runningTime,
    language: req.body.language,
    rated: req.body.rated,
    decs: req.body.decs,
    cinema: req.body.cinema
  });
	try {
    const movie = await newMovie.save();
		res.json({success: true, movie: movie});
	} catch(err) {
		res.status(404).json({success: false, error: err.message});
	}
};

module.exports.checkout = async (req, res) => {
  const { id, cinema } = req.body;

  Movie.findOneAndUpdate({ _id: id }, { cinema: cinema }, function(err, doc) {
    if(err) return res.status(404).json({success: false, error: err});
    res.status(202).json({success: true})
  })
}















// Get movie by id
// module.exports.getMovie = async (req, res) => {
// 	try {
// 		const movie = await Movie.findById(req.params.id);
// 		res.json(movie);
// 	} catch(err) {
// 		res.json(err);
// 	}
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

// Delete a movie
// module.exports.deleteMovie = async (req, res) => {
// 	try {
// 		const movie = await Movie.findById(req.params.id);
// 		movie.remove().then(() => res.json({success: true}));
// 	} catch(err) {
// 		res.status(404).json({success: false, error: err.message});
// 	}
// };