'use strict';

// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo

const number = Number(prompt('inserisci numero'));

if(number % 2 === 0){
    console.log(number);
} else {
    const evenNmber = number +1;
    console.log(evenNmber);
}
   
    
