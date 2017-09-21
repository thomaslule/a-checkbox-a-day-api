const journalEvents = require('./journalEvents');

const journal = {
  editJournalEntry: (bus, day, text) => {
    bus.publish(journalEvents.journalEntryEdited(day, text));
  },
};

module.exports = journal;
