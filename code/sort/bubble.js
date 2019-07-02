const bubbleSort = arr => {
	let max;
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			max = arr[j];
			if (max > arr[j + 1]) {
				arr[j] = arr[j + 1];
				arr[j + 1] = max;
			}
		}
	}
	return arr;
};

export default bubbleSort;