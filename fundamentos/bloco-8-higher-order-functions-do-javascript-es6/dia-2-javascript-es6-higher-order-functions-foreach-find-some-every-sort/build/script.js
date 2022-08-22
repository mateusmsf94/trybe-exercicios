"use strict";
const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];
function authorBornIn1947(books) {
    var _a;
    return (_a = books.find(book => book.author.birthYear === 1947)) === null || _a === void 0 ? void 0 : _a.author.name;
}
console.log(authorBornIn1947(books));
function smallerName(books) {
    let nameBook = '';
    // escreva aqui o seu código
    books.forEach((book) => {
        if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
        }
    });
    return nameBook;
}
console.log(smallerName(books));
function first26char(books) {
    return books.find((book) => book.name.length === 26);
}
console.log(first26char(books));
function descReleasedYear(books) {
    return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log(descReleasedYear(books));
function isAllAuthorXX(books) {
    return books.every(book => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
}
console.log(isAllAuthorXX(books));
function isOneFrom80(books) {
    return books.some(book => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
console.log(isOneFrom80(books));
function authorUnique() {
    return books.every(book => !books.some(bookSome => (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());
