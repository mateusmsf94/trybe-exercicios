const exercicios = {
  imprimeValor: (arr) => arr.map((x) => console.log(x)),

  somaTudo: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  mediaDoArr: (arr) => arr.reduce((acc, curr) => (acc + curr) / 2, 0),

  maiorQue20 (arr) {
    if( this.mediaDoArr(arr) > 20) {
      return "valor maior que 20"
    } else {
      return "valor menor ou igual 20"
    }
  },

  maiorDoArr: (arr) => arr.reduce((max, curr) => {
    if (max < curr) {
      max = curr
    }
    return max
  }, -Infinity),

  maiorFor (arr) {
    let max = -Infinity
    for (i of arr) {
      if (i > max) {
        max = i
      }
    }
    return max
  }
  

}

module.exports = exercicios;