import canIterate from '../canIterate';

test.each([
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
])('Testing of the canIterate function', (object, expected) => {
  expect(canIterate(object)).toBe(expected);
});
