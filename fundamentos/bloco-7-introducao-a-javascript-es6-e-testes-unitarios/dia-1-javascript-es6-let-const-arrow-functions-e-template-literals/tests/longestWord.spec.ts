import {longestWord} from '../script'

describe('is working', () => {
  it('should work', () => {
    expect(true).toBeTruthy()
  })
})

describe('retorna a maior palavra da string', () => {
  expect(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu').match('aconteceu'))
})