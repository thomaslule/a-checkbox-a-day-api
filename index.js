const express = require('express');
const bodyParser = require('body-parser');
const Bus = require('./Bus');
const journalController = require('./journal/journalController');
const JournalProjection = require('./journal/JournalProjection');

const app = express();

app.use(bodyParser.json());

const bus = new Bus();
const journalProjection = new JournalProjection();

bus.addListener('JournalEntryEdited', evt => journalProjection.onJournalEntryEdited(evt));

journalController(app, bus, journalProjection);

app.get('/api/Item/GetMonthItems/:month', (req, res) => {
  res.json([]);
});

app.listen(3001, () => {
  console.log('App listening on port 3001!');
});
