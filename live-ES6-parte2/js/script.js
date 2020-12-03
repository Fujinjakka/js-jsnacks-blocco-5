var studente = {
  nome: "Gianluca",
  cognome: "Pesce",
  eta: 38
}
// console.log(studente);

// console.log(studente.cognome);
//
// var chiave = "cognome";
// console.log(studente[chiave]);

// const nome = studente.nome;
// const cognome = studente.cognome;
// console.log(nome, cognome);


const {eta, cognome, nome} = studente;
// console.log("Cognome", cognome);
// console.log("Eta", eta);

// const studenti = [
//   {
//     nome: "Marco",
//     cognome: "Busellatto",
//     eta: 31
//   },
//   {
//     nome: "Marian",
//     cognome: "Corlade",
//     eta: 32
//   },
//   {
//     nome: "Enrico",
//     cognome: "Rombaldoni",
//     eta: 33
//   },
//   {
//     nome: "Daniele",
//     cognome: "Bedeschi",
//     eta: 38
//   }
// ];

//console.log(studenti[2].eta);

// studenti.forEach(
//   (element, index) => {
//
//     if(element.nome == "Enrico") {
//       //console.log(element.eta);
//     }
//     // console.log(index, element);
//
//   }
// );


// // const studente1 = studenti[0];
// // const studente2 = studenti[1];
// // var studente38 = studenti[38];
// const [studente3, studente4] = studenti;
//
// console.log(studente3, studente4);
//
// console.log(studente4.eta);

// const cats = [
//   {name: 'Jerry', color: 'Gray'},
//   {name: 'Felix', color: 'Black and White'},
//   {name: 'Garfield',color: 'Orange'},
// ];
// cats.forEach(
//   (element) => {
//     console.log(`${element.name}'s color is ${element.color}`);
//   }
// );

// var studenti = ["Marco", "Stephanie", "Marian", "Matteo"];
//
// var nuovoStudenti = studenti.map(
//   (element, i, array) => {
//     return i + " " + element;
//   }
// );
//
// console.log(nuovoStudenti);

// dato un array di numeri, creare un secondo array in cui ciascun elemento è la potenza del numero di partenza

// const numeri = [4, 2, 7, 12, 30, 19, 12, 6, 0];
const potenze = [];

// for (var i = 0; i < numeri.length; i++) {
//   // let risultato = numeri[i] * numeri[i];
//   // potenze.push(numeri[i] * numeri[i]);
//   potenze[i] = numeri[i] * numeri[i];
// }
// console.log(potenze);

// numeri.forEach(
//   (element, index) => {
//     console.log(index);
//     potenze.push(element * element);
//   }
// );
//
// const potenze = numeri.map(
//   (element) => {
//     return element * element;
//   }
// );

// console.log(potenze);


// const studenti = [
//   {
//     nome: "Marco",
//     cognome: "Busellatto",
//     eta: 31
//   },
//   {
//     nome: "Marian",
//     cognome: "Corlade",
//     eta: 32
//   },
//   {
//     nome: "Enrico",
//     cognome: "Rombaldoni",
//     eta: 33
//   },
//   {
//     nome: "Daniele",
//     cognome: "Bedeschi",
//     eta: 38
//   }
// ];
//
// const nomiCompleti = studenti.map(
//   (element) =>  `${element.cognome} ${element.nome}`
// );
//
// console.log(nomiCompleti);

var studenti = ["Marco", "Stephanie", "Marian", "Matteo"];
// var studentiDiNomeMarco = [];

// for(var i = 0; i < studenti.length; i++) {
//
//   if(studenti[i] == "Marco") {
//     studentiDiNomeMarco.push(studenti[i]);
//   }
//
// }

var studentiDiNomeMarco = studenti.filter(
  (element) => element == "Stephanie"
);

// studenti il cui nome inizia con la M - versione ES6
var studentiConLaM = studenti.filter(
  (element, index) => {
    console.log(index, element);
    return element[0] == "M";
  }
);

// // versione ES5
// var studentiConLaM = [];
for(var i = 0; i < studenti.length; i++) {

  if(studenti[i][0] == "M") {
    studentiConLaM.push(studenti[i]);
  }

}

var studentiConLaS = studenti.filter(
  (element, index) => element[0] == "S"
);

console.log(studenti);
console.log(studentiConLaM);
console.log(studentiConLaS);

const numeri = [4, 2, 7, 12, 30, 19, 12, 6, 0];

// prendiamo solo i numeri dispari
const numeriDispari = numeri.filter(
  // (element) => element % 2 != 0
  (element) => {
    return (element % 2 != 0);
  }
);
console.log(numeriDispari);

// prendiamo i numeri di posizione dispari
const numeriPosizioneDispari = numeri.filter(
  (element, index) => {
    // (element) => index % 2 != 0
    return (index % 2 != 0);
  }
);
console.log(numeriPosizioneDispari);
