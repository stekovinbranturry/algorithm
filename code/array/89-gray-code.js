const grayCode = n => {
  let result = [];
  for (let i = 0; i < 1 << n; i++) {
    result.push(i ^ (i >> 1));
  }
  return result;
};

export default grayCode;
