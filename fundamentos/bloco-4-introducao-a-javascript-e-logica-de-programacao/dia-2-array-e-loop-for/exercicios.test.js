const exercicios = require("./exercicios");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicios.imprimeValor(numbers)

test('soma de todos os numeros do array deve ser igual a 278', () => {
  expect(exercicios.somaTudo(numbers)).toBe(278)
})

test('media do array deve ser igua a ', () => {
  expect((exercicios.mediaDoArr(numbers)).toFixed(2)).toEqual("30.28")
})

test('media maior que 20', () => {
  expect(exercicios.maiorQue20(numbers)).toBe("valor maior que 20")
})

test('maior num no array igual a 100', () => {
  expect(exercicios.maiorDoArr(numbers)).toBe(100)
})

test('maiorFor num no array igual a 100', () => {
  expect(exercicios.maiorFor(numbers)).toBe(100)
})

test('imapares do array', () => {
  expect(exercicios.impares(numbers)).toBe(6)
})

test('menor num no array igual a 2', () => {
  expect(exercicios.menorDoArr(numbers)).toBe(2)
})

test('menor num no array igual a 2', () => {
  expect(exercicios.menorFor(numbers)).toBe(2)
})