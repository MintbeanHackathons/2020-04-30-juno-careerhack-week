const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configures environment variables into the dotenv file
require('dotenv').config();

// may not need this, apperently is not needed in new versions of express
const bodyParser = require('body-parser');
// const DataService = require('./services/data-service');

// Create the server app
const app = express();

// middleware: cors and parse json
app.use(cors());
app.use(express.json());
// register the ./public folder as the static assets directory
app.use(express.static('public'));

// express needs this in order to be able to parse JSON bodies
app.use(bodyParser());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection success");
});

// This dataService currently contains the data.
// You will be hooking it up to Mongo as part of your assignment.
// const dataService = new DataService();


// =========== API ROUTES ===========

// List all the data.
// GET /api/data
app.get('/api/data', (req, res) => {
  res.json(dataService.all());
});

// Save a data object
// POST /api/data
// SAMPLE PAYLOAD: { title: "Your title goes here", description: "Your description goes here" }
app.post('/api/data', (req, res) => {
  // TODO:
  // 1. Validate the existence of 'title'
  // 2. Validate the existence of 'description'
  res.json(dataService.create(req.body));
});


// what starts the server on indicated port
const listener = app.listen(3000, () => {
  // get the port from the listener.
  const port = listener.address().port;

  // log the port, so everyone knows where it has been deployed.
  console.log(`Now listening on port ${port}`)
});
