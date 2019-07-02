const canPlaceFlowers = (flowerbed, n) => {
  let max = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (
        (!flowerbed[i - 1] && flowerbed[i + 1] === 0) ||
        (!flowerbed[i - 1] && !flowerbed[i + 1]) ||
        (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ||
        (flowerbed[i - 1] === 0 && !flowerbed[i + 1])
      ) {
        max += 1;
        i += 1;
      }
    }
  }
  return max >= n;
};

export default canPlaceFlowers;
