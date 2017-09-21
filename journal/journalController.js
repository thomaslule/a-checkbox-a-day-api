const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');
const journal = require('./journal');
const monthValidator = require('../util/monthValidator');
const dayValidator = require('../util/dayValidator');

const journalController = (app, bus, journalProjection) => {
  app.get(
    '/api/Journal/GetMonthJournal/:month',
    [
      check('month').custom(monthValidator)
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.mapped() });
      } else {
        const params = matchedData(req);
        res.json(journalProjection.getJournalForMonth(params.month));
      }
    }
  );

  app.post(
    '/api/Journal/EditJournalEntry',
    [
      check('day').custom(dayValidator),
      check('text').exists()
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.mapped() });
      } else {
        const params = matchedData(req);
        journal.editJournalEntry(bus, params.day, params.text);
        res.sendStatus(200);
      }
    }
  );
};

module.exports = journalController;
