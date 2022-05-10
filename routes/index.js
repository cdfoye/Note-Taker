const express = require('express');

const notesRouter = require('./apiroute');

const app = express();

app.use('/apiroute', notesRouter);

module.exports = app;