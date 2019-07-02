// const sortArrayByParityII = A => {
//   let odd = [],
//     even = [];
//   A.forEach(el => {
//     if (el % 2 === 0) {
//       even.push(el);
//     } else {
//       odd.push(el);
//     }
//   });
//   for (let i = 0; i < A.length; i++) {
//     const index = Math.floor(i / 2);
//     A[i] = i % 2 === 0 ? even[index] : odd[index];
//   }
//   return A;
// };

const sortArrayByParityII = A => {
  let i = 0;
  j = 1;
  result = [];
  A.forEach(el => {
    if (el % 2 === 0) {
      result[i] = el;
      i += 2;
    } else {
      result[j] = el;
      j += 2;
    }
  });
  return result;
};

export default sortArrayByParityII;
