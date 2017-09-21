const monthValidator = require('./monthValidator');

test('monthValidator doesnt suck', () => {
  expect(monthValidator('')).toBe(false);
  expect(monthValidator('2017')).toBe(false);
  expect(monthValidator('abc')).toBe(false);
  expect(monthValidator('2017-13')).toBe(false);
  expect(monthValidator('2017-1')).toBe(false);
  expect(monthValidator('2017-01')).toBe(true);
});
