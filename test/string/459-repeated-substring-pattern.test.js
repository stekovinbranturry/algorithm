import repeatedSubstringPattern from '../../code/string/459-repeated-substring-pattern'

test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('abcabc')).toBe(true)
})
test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('abcabcd')).toBe(false)
})