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

