var testingScope = function (escopo) {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = "".concat(ifScope, " \u00F3timo, fui utilizada no escopo !");
        console.log(ifScope);
    }
    else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
};
testingScope(true);
var oddsAndEvens = [13, 3, 4, 10, 7, 2];
var sortOddsAndEvens = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    return "Os numeros ".concat(arr, " se encontram ordenados de forma crescente");
};
console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉
var factorial = function (num) {
    return num === 1 ? 1 : num * factorial(num - 1);
};
console.log(factorial(5));
var str = 'Antônio foi no banheiro e não sabemos o que aconteceu';
export var longestWord = function (frase) {
    var palavras = frase.split(' ');
    var maoirPalavra = palavras.sort(function (a, b) { return a.length - b.length; })[1];
    return maoirPalavra;
};
