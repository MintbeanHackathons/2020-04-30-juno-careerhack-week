const express = require('express');
const bodyParser = require('body-parser');
const DataService = require('./services/data-service');

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
  // TODO: try/catch
  const list = await dataService.all();
  res.json(list);
});

// Save a data object
// POST /api/data
// SAMPLE PAYLOAD: { title: "Your title goes here", description: "Your description goes here" }
app.post('/api/data', async (req, res) => {
  // TODO:
  // 1. Validate the existence of 'title'
  // 2. Validate the existence of 'description'
  // 3. try/catch
  const newObj = await dataService.create(req.body);
  res.json(newObj);
});


// Start the application
const listener = app.listen(3000, () => {
  // get the port from the listener.
  const port = listener.address().port;

  // log the port, so everyone knows where it has been deployed.
  console.log(`Now listening on port ${port}`)
});
