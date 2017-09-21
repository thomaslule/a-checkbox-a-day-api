const journalEvents = require('./journalEvents');

const journalController = (app, bus, journalProjection) => {
  app.get('/api/Journal/GetMonthJournal/:month', (req, res) => {
    res.json(journalProjection.getJournalForMonth(req.params.month));
  });

  app.post('/api/Journal/EditJournalEntry', (req, res) => {
    bus.publish(journalEvents.journalEntryEdited(req.body.day, req.body.text));
    res.sendStatus(200);
  });
};

module.exports = journalController;
