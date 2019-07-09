const calPoints = ops => {
  let result = [];
  ops.forEach(el => {
    switch (el) {
      case 'C':
        result.pop();
        break;
      case 'D':
        result.push(2 * result.slice(-1));
        break;
      case '+':
        result.push(1 * result.slice(-1) + 1 * result.slice(-2, -1));
        break;
      default:
        result.push(1 * el);
        break;
    }
  });
  return result.reduce((total, num) => total + num);
};

export default calPoints;
