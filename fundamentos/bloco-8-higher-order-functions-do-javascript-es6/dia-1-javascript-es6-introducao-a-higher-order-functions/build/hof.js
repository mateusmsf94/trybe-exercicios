"use strict";
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
};
const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };
    return employees;
};
console.log(newEmployees(employeeGenerator));
const numCheck = (myNum, num) => myNum === num;
const loteria = (myNumber, callback) => {
    const number = Math.floor(Math.random() * 5) + 1;
    return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};
console.log(loteria(2, numCheck));
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const hof = (respostas, marcadas, callback) => {
    return (callback(respostas, marcadas));
};
const check = (respostas, marcadas) => {
    const resCertas = marcadas.filter(res => respostas.includes(res));
    return resCertas.length;
};
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, check));
