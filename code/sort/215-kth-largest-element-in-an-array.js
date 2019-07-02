const findKthLargest = (nums, k) => {
  const len = nums.length;
  for (let i = len, max; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        max = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = max;
      }
    }
  }
  return nums[len - k];
};

export default findKthLargest;
