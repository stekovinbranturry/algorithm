import countBinarySubstrings from '../../code/string/696-Count-Binary-Substrings';

test('countBinarySubstrings("00110011")', () => {
  expect(countBinarySubstrings('00110011')).toBe(6);
});

test('countBinarySubstrings("0")', () => {
  expect(countBinarySubstrings('0')).toBe(0);
});

test('countBinarySubstrings("00")', () => {
  expect(countBinarySubstrings('00')).toBe(0);
});
