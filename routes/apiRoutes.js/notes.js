
const express = require('express');
const router = express.Router();


// location of the routes
router.use(require('./noteRoutes'));

const getNotes = require("../../lib/notes");
const getNote = require("../../lib/notes");
const validateNote = require("../../lib/notes");
const saveNote = require("../../lib/notes");
const deleteNote = require("../../lib/notes");
const db = require("../../db/db.json");


router.get("/notes", (req, res) => {
    let results = getNotes();
    res.json(results);
});

router.get("/notes/:id", (req, res) => {
    let results = getNote(req.params.id);
    if (results) {
        res.json(db);
    } else {
        res.send(404);
    }
});


router.post("/notes", (req, res) => {
if (!validateNote(req.body)) {
    res.status(400).send('Note is not incomplete');
    } else {
    const note = saveNote(req.body);
    res.json(note);
}
});

// DELETE route to remove note by id.
router.delete('/notes/:id', (req, res) => {
let results = deleteNote(req.params.id);
if (results) {
res.json(results);
} else {
    res.status(400).send('Please try again.');
}
});  

module.exports = router;

