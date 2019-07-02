import grayCode from '../../code/array/89-gray-code';

test('grayCode',()=>{
  expect(grayCode(3)).toStrictEqual([0, 1, 3, 2, 6, 7, 5, 4]);
})