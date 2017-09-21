const express = require('express');
const bodyParser = require('body-parser');
const Bus = require('./Bus');
const journalController = require('./journal/journalController');
const JournalProjection = require('./journal/JournalProjection');
const itemController = require('./item/itemController');
const ItemListProjection = require('./item/ItemListProjection');

const app = express();

app.use(bodyParser.json());

const bus = new Bus();
const journalProjection = new JournalProjection();
const itemListProjection = new ItemListProjection();

bus.addListener('JournalEntryEdited', event => journalProjection.onJournalEntryEdited(event));
bus.addListener('ItemAdded', event => itemListProjection.onItemAdded(event));

journalController(app, bus, journalProjection);
itemController(app, bus, itemListProjection);

app.listen(3001, () => {
  console.log('App listening on port 3001!');
});
