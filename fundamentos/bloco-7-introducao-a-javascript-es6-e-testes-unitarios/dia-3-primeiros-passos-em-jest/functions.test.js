const {sum, myRemove, myFizzBuzz, techList, hydrate} = require ('./functions')

describe('Testando a funcao sum', () => {
  test('funcao retorna 9 com sum(4,5)', () => {
    expect(sum(4,5)).toBe(9)
  })

  test('funcao retorna 0 com sum(0,0)', () => {
    expect(sum(0,0)).toBe(0)
  })

  test('funcao retorna erro se nao for digitado', ()=>{
    expect(() => sum(4, "5")).toThrow()
  })

  test('funcao retorna erro se nao for digitado', ()=>{
    expect(() => sum(4, "5")).toThrow('parameters must be numbers')
  })
})

describe('Testando a funcao myRemove', () => {
  test('funcao retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })

  test('funcao retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })

  test('funcao retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})

describe('Testando funcao myFizzBuzz', () => {
  test('myFizzBuzz(15) retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
  })

  test('myFizzBuzz(3) retorna fizzbuzz', () => {
    expect(myFizzBuzz(3)).toMatch('fizz')
  })

  test('myFizzBuzz(5) retorna fizzbuzz', () => {
    expect(myFizzBuzz(5)).toMatch('buzz')
  })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});


describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});