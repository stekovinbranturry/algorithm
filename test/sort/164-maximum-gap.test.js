import maximumGap from '../../code/sort/164-maximum-gap';

test('maximumGap',()=>{
  expect(maximumGap([3,6,9,1])).toBe(3);
})

test('maximumGap',()=>{
  expect(maximumGap([3])).toBe(0);
})

test('maximumGap',()=>{
  expect(maximumGap([11,12,13,1])).toBe(10);
})

test('maximumGap',()=>{
  expect(maximumGap([50,11,12,13])).toBe(37);
})