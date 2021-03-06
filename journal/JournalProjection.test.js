const JournalProjection = require('./JournalProjection');
const journalEvents = require('./journalEvents');

test('JournalEntryEdited on new day creates new entry', () => {
  const journalProjection = new JournalProjection();
  journalProjection.onJournalEntryEdited(journalEvents.journalEntryEdited('2017-01-01', 'new text'));
  journalProjection.onJournalEntryEdited(journalEvents.journalEntryEdited('2017-01-02', 'another text'));
  const entries = journalProjection.getJournalForMonth('2017-01');
  expect(entries.length).toBe(2);
  expect(entries[0]).toEqual({ day: '2017-01-01', text: 'new text' });
  expect(entries[1]).toEqual({ day: '2017-01-02', text: 'another text' });
});

test('JournalEntryEdited on existing day edit entry', () => {
  const journalProjection = new JournalProjection();
  journalProjection.onJournalEntryEdited(journalEvents.journalEntryEdited('2017-01-01', 'new text'));
  journalProjection.onJournalEntryEdited(journalEvents.journalEntryEdited('2017-01-01', 'another text'));
  const entries = journalProjection.getJournalForMonth('2017-01');
  expect(entries.length).toBe(1);
  expect(entries[0]).toEqual({ day: '2017-01-01', text: 'another text' });
});

test('getJournalForMonth returns only entries of given month', () => {
  const journalProjection = new JournalProjection();
  journalProjection.onJournalEntryEdited(journalEvents.journalEntryEdited('2017-01-01', 'new text'));
  journalProjection.onJournalEntryEdited(journalEvents.journalEntryEdited('2017-02-01', 'another text'));
  const entries = journalProjection.getJournalForMonth('2017-02');
  expect(entries.length).toBe(1);
  expect(entries[0]).toEqual({ day: '2017-02-01', text: 'another text' });
});
