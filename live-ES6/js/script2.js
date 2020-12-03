var nome1 = "Qui";
var nome2 = "Qua";

// console.log(nome1 + " Quo " + nome2 + "\nandarono al mercato");

// console.log(`${nome1} Quo ${nome2}
// andarono al mercato`);

var stringaHtml = `<div id='prova'>
  <h1>${nome1}</h1>
  <h3>${nome2}</h3>
</div>`;
//document.getElementById('container').innerHTML = stringaHtml;
// console.log(stringaHtml);

// const somma = (num1, num2) => num1 + num2;
// console.log(somma);

const myFunction = () => 1 + 2;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const somma = (num1, num2) => num1 + num2;
// console.log(somma);
const sottrazione = (num1, num2) => num1 - num2;

const ePari = (numero) => (numero % 2 == 0);

// console.log(ePari(6));
// console.log(ePari(7));
// var risultato = somma(5, 7);
// // risultato = somma(6, 8);
// console.log("Somma:", risultato);
// console.log(getRandomNumber(1, 100));

// function myFunction() {
//   return (1 + 2);
// }

var risultato = myFunction();
// console.log(risultato);

// document.getElementById('container').addEventListener('click',
//   function() {
//     console.log(this);
//   }
// );

document.getElementById('container').addEventListener('click',
  () => {
    console.log(this);
  }
);

function myFunction2(...myArguments) {
  // console.log(myArguments);
  console.log(myArguments[4]["nome"]);
}

function sommaSpread(...numeri) {
  var somma = 0;
  for (var i = 0; i < numeri.length; i++) {
    somma += numeri[i];
  }
  return somma;
}

console.log("Somma con operatore Spread", sommaSpread(2, 5, 6, 7, 12, 23, 35));
console.log("Somma con operatore Spread", sommaSpread(99, 5, 8, 23, 35));
console.log("Somma con operatore Spread", sommaSpread("Ciao", ",", "come", "stai"));


myFunction2("Ciao", 5, 123, ["blue", "red"], { nome: "Gianluca"});

const array1 = [12, 13, 14];
const array2 = [56, 90, 2];

var mergedArray = [...array1, 68,...array2];
console.log(mergedArray);

var studente = {
  nome: "Gianluca",
  cognome: "Pesce"
}

var schedaStudente = {
  ...studente,
  eta: 38,
  sesso: "M"
}

// console.log(schedaStudente);

var nome = "Gianluca";
var cognome = "Pesce";
var eta = 38;
var sesso = "M";

var docente = {
  nome,
  cognome,
  eta,
  sesso
};
// console.log(docente);

var nomeChiave = prompt("Scrivi qualcosa");
var docente1 = {
  nome: "Gianluca",
  cognome: "Pesce",
  [nomeChiave]: 38
};

console.log(docente1);
