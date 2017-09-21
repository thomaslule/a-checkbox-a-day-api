const journal = require('./journal');

const journalController = (app, bus, journalProjection) => {
  app.get('/api/Journal/GetMonthJournal/:month', (req, res) => {
    res.json(journalProjection.getJournalForMonth(req.params.month));
  });

  app.post('/api/Journal/EditJournalEntry', (req, res) => {
    journal.editJournalEntry(bus, req.body.day, req.body.text);
    res.sendStatus(200);
  });
};

module.exports = journalController;
