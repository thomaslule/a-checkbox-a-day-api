const journalEvents = {
  journalEntryEdited: (day, text) => ({
    type: 'JournalEntryEdited', date: new Date(), id: day, data: { day, text },
  }),
};

module.exports = journalEvents;
