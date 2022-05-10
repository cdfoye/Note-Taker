const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for adding a note
notes.post('/', (req,res) => {
    const {title,text} = req.body;

    if (req.body) {
        const addNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(addNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error(`Error adding new note`);
    }
});

module.exports = notes;
