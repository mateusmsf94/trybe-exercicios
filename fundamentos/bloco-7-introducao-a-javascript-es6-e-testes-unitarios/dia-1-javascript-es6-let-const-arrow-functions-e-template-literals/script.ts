const testingScope = (escopo: boolean): void => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens: number[] = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (arr:number[]) => {
  arr.sort((a, b) => a - b)
  return `Os numeros ${arr} se encontram ordenados de forma crescente`

};

console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉

const factorial = (num: number): number => {
  return num === 1 ? 1 : num * factorial(num - 1)
  
  
}
console.log(factorial(5))

const str = 'Antônio foi no banheiro e não sabemos o que aconteceu'
export const longestWord = (frase: string) => {
  let palavras = frase.split(' ')
  let maoirPalavra = palavras.sort((a:string, b:string) => a.length - b.length)[1]
  return maoirPalavra
}
