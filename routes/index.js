const express = require('express');

//import modular  router for /apiroute
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;