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
  },

  impares: (arr) => arr.reduce((acc, curr) => {
    if(curr % 2 !== 0) {
      acc += 1      
    } 
    return acc

  }, 0),

  menorDoArr: (arr) => arr.reduce((min, curr) => {
    if (min > curr) {
      min = curr
    }
    return min
  }, Infinity),

  menorFor (arr) {
    let min = Infinity
    for (i of arr) {
      if (i < min) {
        min = i
      }
    }
    return min
  },

  imprime25 () {
    const numeros = []
    for (let i = 1; i <=25; i++) {
      numeros.push(i)
    }
    return numeros
  }    

}

const numeros = exercicios.imprime25()
const por2 = numeros.map(num => num / 2)
console.log(por2)
// const numsPor2 = numeros.map(num => num / 2)
// console.log(numsPor2)



module.exports = exercicios;