import findSubstring from '../../code/recursion/30-substring-with-concatenation-of-all-words';

test('findSubstring', () => {
	expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9]);
});
test('findSubstring', () => {
	expect(
		findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
	).toEqual([]);
});
