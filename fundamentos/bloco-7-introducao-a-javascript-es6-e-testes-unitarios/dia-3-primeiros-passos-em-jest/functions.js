function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function techList (arr, name) {
  if (arr.length === 0 ) return('Vazio!')
  else {
    let result = []
    arr.sort().forEach(tech => {
      result.push({
        'tech': tech,
        'name': name
      })
    })
  return result
  }
}

function hydrate (str) {
  let matches = str.match(/\d+/g)
  let totalDeAgua = matches.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0)
  return (totalDeAgua > 1 ? `${totalDeAgua} copos de água` : '1 copo de água')
}

module.exports = {sum, myRemove, myFizzBuzz, techList, hydrate}