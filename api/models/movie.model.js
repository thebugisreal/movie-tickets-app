const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new schema
const movieSchema = new Schema({
	name: {
		type: String,
    required: true
  },
  director: String,
  cast: {
    type: Array,
    default: []
  },
  genre: {
    type: Array,
    default: []
  },
  releaseDate: String,
  runningTime: String,
  language: String,
  rated: String,
  decs: String,
  cinema: {
    type: Array,
    default: []
  }
});

// export schema to use on movie.controller.js
module.exports = Movie = mongoose.model('Movie', movieSchema, 'movies');