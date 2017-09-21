const dayValidator = require('./dayValidator');

test('dayValidator doesnt suck', () => {
  expect(dayValidator('')).toBe(false);
  expect(dayValidator('2017')).toBe(false);
  expect(dayValidator('abc')).toBe(false);
  expect(dayValidator('2017-02-31')).toBe(false);
  expect(dayValidator('2017-1-1')).toBe(false);
  expect(dayValidator('2017-01-01')).toBe(true);
});
