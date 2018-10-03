const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect mongodb
mongoose.connect('mongodb://localhost/cgv-database', { useNewUrlParser: true });

// check connect successfully
const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
	  console.log('Connected Mongodb...')
});


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// create port for server > localhost:3000
const port = 3000;

app.get('/', function(req, res) {
	res.send(`It's worked...`);
});

// to know when server starting...
app.listen(port, function() {
	console.log(`Server listening on port ${port}`);
});