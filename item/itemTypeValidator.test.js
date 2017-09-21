const itemTypeValidator = require('./itemTypeValidator');

test('itemTypeValidator doesnt suck', () => {
  expect(itemTypeValidator('')).toBe(false);
  expect(itemTypeValidator('truc')).toBe(false);
  expect(itemTypeValidator('TASK')).toBe(true);
  expect(itemTypeValidator('NOTE')).toBe(true);
  expect(itemTypeValidator('EVENT')).toBe(true);
});
