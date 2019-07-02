import selectSort from '../../code/sort/select';

test('select sort', ()=>{
  expect(selectSort([1,3,2,4,7,5,1])).toEqual([1,1,2,3,4,5,7])
})