function ehPalidromo (palavra) {
  let reverse = palavra.split('').reverse().join('')
  if(palavra === reverse) {
    return true
  } else {
    return false
  }
}

console.log(ehPalidromo('arara'));

function indexDoMaior(arr) {
  let max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  }, -Infinity);
  return arr.indexOf(max)
}

console.log(indexDoMaior([2, 3, 6, 7, 10, 1]))