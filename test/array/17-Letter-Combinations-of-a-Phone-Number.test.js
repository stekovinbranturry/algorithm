import letterCombinations from '../../code/array/17-Letter-Combinations-of-a-Phone-Number';

test('letterCombinations', () => {
  expect(letterCombinations('23')).toStrictEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf'
  ]);
});
