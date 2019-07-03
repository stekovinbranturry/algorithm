const findSubstring = (s, words) => {
	const len = words.length;
	let comb = [];
	const combine = (storeArr, wordsArr) => {
		if (storeArr.length === len) {
			comb.push(storeArr);
		} else {
			wordsArr.forEach((el, i) => {
				const tmp = [...wordsArr];
				tmp.splice(i, 1);
				combine(storeArr.concat(el), tmp);
			});
		}
	};
	combine([], words);
	return comb
		.map(item => s.indexOf(item.join('')))
		.filter(item => item !== -1)
		.sort((a, b) => a - b);
};

export default findSubstring;
