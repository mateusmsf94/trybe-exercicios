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

test('maior entre 34 29 igual a 34', () => {
  expect(exercicios.maior(29, 34)).toBe(34)
})

test('maior de 3, 8, 10 igual a 10', () => {
  expect(exercicios.maior3(8, 10, 2)).toBe(10)
})

test('numero maior que zero retorna positive', () => {
  expect(exercicios.posOuneg(4)).toBe('positive')
})

test('triangulo com angulo negativo', () => {
  expect(exercicios.triangulo(30, 50, -100)).toBe('os angulos tem que ser positivo')
})

test('soma dos angulos nao da 180', () => {
  expect(exercicios.triangulo(30, 40, 100)).toBe('triangulo invalido')
})

test('triangulo valido', () => {
  expect(exercicios.triangulo(30, 50, 100)).toBe('triangulo valido')
})

test('xadrez peca valida', () => {
  expect(exercicios.xadrez("Peao")).toBe("move pra frente e come na diagonal")
})

test('xadrez peca invalida', () => {
  expect(exercicios.xadrez("pato")).toBe('insira uma peca valida')
})

