const exercicios = {
  imprimeValor: (arr) => arr.map((x) => console.log(x)),

  somaTudo: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  mediaDoArr: (arr) => arr.reduce((acc, curr) => (acc + curr) / 2, 0)
  
  
}

module.exports = exercicios;