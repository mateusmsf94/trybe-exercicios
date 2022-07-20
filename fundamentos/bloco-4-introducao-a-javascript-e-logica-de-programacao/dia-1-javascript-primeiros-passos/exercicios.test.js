const exercicios = require('./exercicios-1')

test('Adds 2 + 2 to equal 4', () => {
  expect(exercicios.adicao(2, 2)).toBe(4)
})

test('Subitrai 7 - 4 igual a 3', () =>{
  expect(exercicios.subtracao(7, 4)).toBe(3)
})

test('multiplica 4 * 7 igual a 28', () => {
  expect(exercicios.multiplicacao(4, 7)).toBe(28)
})

test('divisao 15 por 3 igual 5', () => {
  expect(exercicios.divisao(15, 3)).toBe(5)
})