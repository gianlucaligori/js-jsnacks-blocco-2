/* 1) snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
// let num;
// let arrA = [];
// let verifica = false;


// for (let i = 0; i < 6; i++) {
//     num = prompt("Inserisci numero");


// if (num % 2 == 0) {
//     console.log('Numero pari', num);
// }

// else if (num % 2 == 1) {
//     verifica = true;
//     console.log('dispari', num);
//     parseInt(myArr.push(num));
// }
// }

// console.log('myArr', myArr);

let numeriDispari = []; // Creiamo un array vuoto

for (let i = 0; i < 6; i++) {
  let numero = parseInt(prompt("Inserisci un numero:"));
  if (numero % 2 !== 0) {
    numeriDispari.push(numero); // Inseriamo il numero nell'array solo se è dispari
  }
}

console.log("Numeri dispari inseriti:", numeriDispari);
