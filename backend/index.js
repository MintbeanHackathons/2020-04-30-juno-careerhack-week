const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configures environment variables into the dotenv file
require('dotenv').config();

// may not need this, apperently is not needed in new versions of express
const bodyParser = require('body-parser');

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

// require route files 
const commentRouter = require('./routes/comments');
const userRouter = require('./routes/users');

// use route files 
app.use('/comments', commentRouter);
app.use('/users', userRouter);


// what starts the server on indicated port
const listener = app.listen(5000, () => {
  // get the port from the listener.
  const port = listener.address().port;

  // log the port, so everyone knows where it has been deployed.
  console.log(`Now listening on port ${port}`)
});
