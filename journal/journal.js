const journalEvents = require('./journalEvents');

const journal = {
  editJournalEntry: (bus, day, text) => new Promise((resolve) => {
    bus.publish(journalEvents.journalEntryEdited(day, text));
    resolve();
  })
};

module.exports = journal;
