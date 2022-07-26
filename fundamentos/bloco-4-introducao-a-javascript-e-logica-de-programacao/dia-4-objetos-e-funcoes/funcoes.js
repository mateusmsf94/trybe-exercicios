function ehPalidromo (palavra) {
  let reverse = palavra.split('').reverse().join('')
  if(palavra === reverse) {
    return true
  } else {
    return false
  }
}

console.log(ehPalidromo('arara'));