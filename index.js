const express = require('express');
const bodyParser = require('body-parser');
const DataService = require('./services/data-service');
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/mintbean'


//connect to the mongoDB

mongoose.connect(url, { useNewUrlParser: true })


const db = mongoose.connection

//check if connection succeeds
db.once('open', _ => {
  console.log('Database connected: ', url)
})

db.on('error', err => {
  console.error('Connection error: ', err)
})

//define a schema

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: 'string',
  password: 'string',
  comments: 'string'
});

//compile a model

const User = mongoose.model('User', userSchema);

User.create({
  username: 'alex',
  password: 'password'
}, function(err, alex) {
  if (err) return handleError(err);
})




// Create the server app
const app = express();

// register the ./public folder as the static assets directory
app.use(express.static('public'));

// express needs this in order to be able to parse JSON bodies
app.use(bodyParser());

// This dataService currently contains the data.
// You will be hooking it up to Mongo as part of your assignment.
const dataService = new DataService();


// =========== API ROUTES ===========

// List all the data.
// GET /api/data
app.get('/api/data', async (req, res) => {
  const list = await dataService.all()
  res.json(list);
});




// Save a data object
// POST /api/data
// SAMPLE PAYLOAD: { title: "Your title goes here", description: "Your description goes here" }
app.post('/api/data', async (req, res) => {
  // TODO:
  // 1. Validate the existence of 'title'
  // 2. Validate the existence of 'description'
  const newObj = await dataService.create(req.body)
  res.json(newObj);
});


// Start the application
const listener = app.listen(process.env.PORT || 3000, () => {
  // get the port from the listener.
  const port = listener.address().port;

  // log the port, so everyone knows where it has been deployed.
  console.log(`Now listening on port ${port}`)
});
