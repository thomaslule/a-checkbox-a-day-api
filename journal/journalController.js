const { check } = require('express-validator/check');
const journal = require('./journal');
const monthValidator = require('../util/monthValidator');
const dayValidator = require('../util/dayValidator');
const validate = require('../util/validate');
const { badRequestCallback, okCallback } = require('../util/httpResponse');

function journalController(app, bus, journalProjection) {
  app.get(
    '/api/Journal/GetMonthJournal/:month',
    [
      check('month').custom(monthValidator)
    ],
    (req, res) => {
      validate(req, res)
        .then(params => res.json(journalProjection.getJournalForMonth(params.month)))
        .catch(badRequestCallback(res));
    }
  );

  app.post(
    '/api/Journal/EditJournalEntry',
    [
      check('day').custom(dayValidator),
      check('text').exists()
    ],
    (req, res) => {
      validate(req, res)
        .then(params => journal.editJournalEntry(bus, params.day, params.text))
        .then(okCallback(res))
        .catch(badRequestCallback(res));
    }
  );
}

module.exports = journalController;
