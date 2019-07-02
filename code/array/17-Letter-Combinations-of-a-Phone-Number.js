const dict = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

const calTwoArr = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push(arr1[i] + arr2[j]);
    }
  }
  return result;
};

const letterCombinations = digits => {
  if (!digits || digits.includes('1')) {
    return [];
  }

  let arr = [];
  digits.split('').map(item => {
    arr.push(dict[item]);
  });

  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    return calTwoArr(arr[0], arr[1]);
  }

  if (arr.length > 2) {
    let tmp = calTwoArr(arr[0], arr[1]);
    let output;
    for (let i = 2; i < arr.length; i++) {
      output = calTwoArr(tmp, arr[i]);
      tmp = output;
    }
    return output;
  }
};

export default letterCombinations;
