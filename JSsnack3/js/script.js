'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati

const nomi = ['Luca', 'Marco', 'Davide', 'Matteo', 'Lorenzo', 'Manuel', 'Nicola'];
const cognomi = ['Rossi', 'Polo', 'Collaro', 'Zanfrisco', 'Bonafini', 'Conti', 'Petrarca'];
const listaInvitati = [];


for (let i = 0; i < 3; i++) {
    let nomeInvitato = Math.floor(Math.random() * nomi.length);
    let cognomeInvitato = Math.floor(Math.random() * cognomi.length);
    const sceltaInvitato = `${nomi[nomeInvitato]} ${nomi[cognomeInvitato]}`;
    listaInvitati.push(sceltaInvitato);
}
console.log(listaInvitati);