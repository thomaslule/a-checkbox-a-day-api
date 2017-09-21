const JournalProjection = class {
  constructor() {
    this.entries = [];
  }

  onJournalEntryEdited(event) {
    if (this.entries.filter(entry => entry.day === event.data.day).length > 0) {
      this.entries = this.entries.map(entry =>
        (entry.day === event.data.day ? { day: entry.day, text: event.data.text } : entry));
    } else {
      this.entries.push({ day: event.data.day, text: event.data.text });
    }
  }

  getJournalForMonth(month) {
    return this.entries.filter(entry => entry.day.startsWith(month));
  }
};

module.exports = JournalProjection;
