import canPlaceFlowers from '../../code/array/605-can-place-flowers';

test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});
test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});
test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([0], 1)).toBe(true);
});
test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1], 1)).toBe(false);
});
