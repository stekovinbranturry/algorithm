const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);

// const hasGroupsSizeX = deck => {
//   if (!deck || deck.length < 2) {
//     return false;
//   }

//   deck.sort((a, b) => a - b);

//   let arr = [];
//   let tmp = 0;
//   for (let i = 1; i < deck.length; i++) {
//     if (deck[i - 1] !== deck[i]) {
//       arr.push(i - tmp);
//       tmp = i;
//     }
//   }
//   arr.push(deck.length - tmp);

//   let cd = 0;
//   arr.map(item => {
//     cd = gcd(cd, item);
//   });

//   return cd > 1;
// };

const hasGroupsSizeX = deck => {
  if (!deck || deck.length < 2) {
    return false;
  }

  let map = new Map();

  for (let i = 0; i < deck.length; i++) {
    let v = map.get(deck[i]);
    map.set(deck[i], v ? v + 1 : 1);
  }

  let cd = 0;
  for (const value of map.values()) {
    cd = gcd(cd, value);
  }

  return cd > 1;
};

export default hasGroupsSizeX;
