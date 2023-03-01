'use strict';

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// let somma = 0;

// for (let i = 0; i < 5; i++) {
//     const number = Number(prompt('Inserisci numero'));
//     console.log(number);
//     somma += number;
// }
// console.log(somma);
let somma = 0;
let i = 0;
while(i < 5){
    const number = Number(prompt('Inserisci numero'));
    console.log(number);
    somma += number;
    i++;
}
console.log(somma);
