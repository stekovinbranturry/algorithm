/**
 * runtime error
 */

// export default s => {
//   let output = 0;
//   const length = s.length;

//   function matchPattern(s) {
//     const a = s.match(/^(0+|1+)/)[0];
//     const b = (a[0] ^ 1).toString().repeat(a.length);
//     const reg = new RegExp(`^(${a}${b})`);
//     return reg.test(s);
//   }

//   for (let i = 0; i < length - 1; i++) {
//     const sub = matchPattern(s.slice(i));
//     if (sub) {
//       output += 1;
//     }
//   }

//   return output;
// };

/**
 * leetcode 答案
 */
// export default s => {
//   let [ans, prev, cur] = [0, 0, 1];
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] !== s[i]) {
//       ans += Math.min(prev, cur);
//       prev = cur;
//       cur = 1;
//     } else {
//       cur++;
//     }
//   }
//   return ans + Math.min(prev, cur);
// };

const countBinarySubstrings = s => {
  let [ans, prev, curr] = [0, 0, 1];
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      ans += Math.min(prev, curr);
      prev = curr;
      curr = 1;
    } else {
      curr += 1;
    }
  }
  return (ans += Math.min(prev, curr));
};

export default countBinarySubstrings;
