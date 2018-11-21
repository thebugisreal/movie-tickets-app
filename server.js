// .env
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const userRoute = require('./api/routes/user.route');
const movieRoute = require('./api/routes/movie.route');
const postRoute = require('./api/routes/post.route');

// connect mongodb
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

// check connect successfully
const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
	  console.log('MongoDB Connected...')
});

const cors = require('cors')
const app = express();
const port = process.env.PORT;

// Bodyparser Middleware
app.use(bodyParser.json());

// use routes
app.use('/api/users', cors(), userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/posts', postRoute);

// to know when server starting...
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});