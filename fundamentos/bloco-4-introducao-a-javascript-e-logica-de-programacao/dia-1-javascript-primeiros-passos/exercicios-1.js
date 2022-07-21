const exercicios = {
  adicao: (n1, n2) => n1 + n2,
  
  subtracao: (a, b) => a - b,

  multiplicacao: (a, b) => a * b,

  divisao: (a, b) => a / b,

  maior(a, b) {
    const maior = a > b? a : b
    return maior
  },

  maior3: function(a, b, c) {
    return this.maior(this.maior(a, b), c)
  },
  
  posOuneg: (a) => a > 0? "positive" : "negative",

  triangulo: (a1, a2, a3) => {
    if(a1 < 0 || a2 < 0 || a3 < 0) {
      return("os angulos tem que ser positivo")
    } else if (a1 + a2 + a3 !== 180) {
      return("triangulo invalido")
    } else {
      return("triangulo valido")
    }    
  },

  xadrez: (nomeDaPeca) => {
    switch (nomeDaPeca.toLowerCase()) {
      case "peao":
        return "move pra frente e come na diagonal"
    
      default:
        return "insira uma peca valida"
    }
  }
  

}




module.exports = exercicios;
  
  
// // Exercicio 1
  


// adicao(21, 4);


// subtracao(21, 4);

// function multiplicacao(a, b) {
  //   console.log(a * b);
  // }

// multiplicacao(21, 4);

// function divisao(a, b) {
//   console.log(a / b);
// }

// divisao(21, 4);

// function modulo(a, b) {
//   console.log(a % b);
// }

// modulo(21, 4);

// // Exercicio 2

// function maior(a, b) {
  //   const maior = a > b ? a : b;
  //   return maior;
  // }
  
  // console.log(maior(4, 5));
  
  // function maior3 (a, b, c) {
    //   return maior(maior(a, b), c)
    // }
    
    // console.log(maior3(3, 54, 32))
    
