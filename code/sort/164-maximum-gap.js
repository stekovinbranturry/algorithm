const maximumGap = nums => {
  const len = nums.length;
  if (len === 1) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < len - 1; i++) {
    let gap = nums[i + 1] - nums[i];
    if (gap > max) {
      max = gap;
    }
  }
  return max;
};

// const maximumGap = nums => {
//   const len = nums.length;
//   if (len < 2) {
//     return 0;
//   }
//   let max = 0;
//   for (let i = 0; i < len; i++) {
//     let min = i;
//     for (let j = i + 1; j < len; j++) {
//       if (nums[j] < nums[min]) {
//         min = j;
//       }
//     }
//     if (nums[min] < nums[i]) {
//       nums[min] = nums[min] ^ nums[i];
//       nums[i] = nums[min] ^ nums[i];
//       nums[min] = nums[min] ^ nums[i];
//     }
//     if (i > 0) {
//       let gap = nums[i] - nums[i - 1];
//       if (gap > max) {
//         max = gap;
//       }
//     }
//   }

//   return Math.max(max, nums[len - 1] - nums[len - 2]);
// };

export default maximumGap;
