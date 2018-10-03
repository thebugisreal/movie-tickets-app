const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoute = require('./api/routes/user.route');

// connect mongodb
mongoose.connect('mongodb://localhost/cgv-database', { useNewUrlParser: true });

// check connect successfully
const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
	  // we're connected!
	  console.log('MongoDB Connected...')
});

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// create port for server > localhost:3000
const port = process.env.PORT || 5000;

// use routes
app.use('/api/users', userRoute);


app.get('/', (req, res) => {
	res.send(`It's worked...`);
});

// to know when server starting...
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});