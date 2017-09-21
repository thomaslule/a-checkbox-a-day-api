const JournalProjection = class {
  constructor() {
    this.entries = [];
  }

  onJournalEntryEdited(event) {
    if (this.entries.filter(entry => entry.day === event.day).length > 0) {
      this.entries = this.entries.map(entry =>
        (entry.day === event.day ? { day: entry.day, text: event.text } : entry));
    } else {
      this.entries.push({ day: event.day, text: event.text });
    }
  }

  getJournalForMonth(month) {
    return this.entries.filter(entry => entry.day.startsWith(month));
  }
};

module.exports = JournalProjection;
