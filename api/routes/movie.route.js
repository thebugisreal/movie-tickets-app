const express = require('express');
const router = express.Router();

const controller = require('../controllers/movie.controller');

// @route   GET api/movies
// @desc    Get all movies
// @access  Public
router.get('/', controller.getMovies);

// @route   POST api/movies
// @desc    Add new movie
// @access  Public
router.post('/', controller.addMovie);

// @route   PATCH api/movies/checkout
// @desc    Update movie info
// @access  Public
router.patch('/checkout', controller.checkout);

// export router to use on server.js *important!
module.exports = router;














// @route   GET api/movies/:id
// @desc    Get movie by id
// @access  Public
// router.get('/:id', controller.getMovie);

// @route   PATCH api/movies/:id
// @desc    Update movie info
// @access  Public
// router.patch('/:id', controller.updateMovie);

// @route   DELETE api/movies/:id
// @desc    Delete a movie
// @access  Public
// router.delete('/:id', controller.deleteMovie);

