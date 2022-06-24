const sum = require('../source/index');

test('sum 2 numbers', () => {
    expect(sum(1, 2)).toBe(3);
});
