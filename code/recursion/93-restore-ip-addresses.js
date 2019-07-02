const restoreIpAddresses = s => {
	if (s.length > 12) {
		return [];
	}
	let result = [];
	const search = (cur, sub) => {
		if (cur.length === 4 && cur.join('') === s) {
			result.push(cur.join('.'));
		} else {
			const len = Math.min(3, sub.length);
			for (let i = 0; i < len; i++) {
				const tmp = sub.substr(0, i + 1);
				if (tmp === '0' || (tmp < 256 && !tmp.startsWith('0'))) {
					search([...cur, ...[tmp]], sub.substr(i + 1));
				}
			}
		}
	};
	search([], s);
	return result;
};

/**
 * todo
 */
export default restoreIpAddresses;
