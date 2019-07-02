const firstMissingPositive = nums => {
  if (nums.length < 1) {
    return 1;
  } else if (nums.length === 1) {
    if (nums[0] !== 1) {
      return 1;
    } else {
      return 2;
    }
  } else {
    for (let i = 0; i < nums.length; i++) {
      let min = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[min]) {
          min = j;
        }
      }
      if (nums[min] < nums[i]) {
        nums[min] = nums[min] ^ nums[i];
        nums[i] = nums[min] ^ nums[i];
        nums[min] = nums[min] ^ nums[i];
      }
      if (nums[0] > 1) {
        return 1;
      }
      if (i > 0) {
        if (nums[i] > 1 && nums[i - 1] <= 0) {
          return 1;
        }
        if (nums[i] > 0 && nums[i - 1] > 0 && nums[i] - nums[i - 1] > 1) {
          return nums[i - 1] + 1;
        }
        if (i === nums.length - 1) {
          if (nums[i] >= 1) {
            return nums[nums.length - 1] + 1;
          } else {
            return 1;
          }
        }
      }
    }
  }
};

export default firstMissingPositive;
