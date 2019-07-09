import calPoints from '../../code/stack/682-baseball-game'

test('calPoints', ()=>{
  expect(calPoints(["5","2","C","D","+"])).toBe(30)
})

test('calPoints', ()=>{
  expect(calPoints(["5","-2","4","C","D","9","+","+"])).toBe(27)
})