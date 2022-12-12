/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = (l1, l2) => l1 * l2;
let rettangolo = area(2, 3);
console.log(rettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = (x, y) => {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
};
let quadrato = crazySum(2, 3);
let triangolo = crazySum(2, 2);
console.log(quadrato);
console.log(triangolo);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(a) {
  if (a < 19) {
    return Math.abs(a - 19);
  } else {
    return Math.abs((a - 19) * 3);
  }
}
let contenitore1 = 5;
let contenitore2 = 20;
console.log(crazyDiff(contenitore1));
console.log(crazyDiff(contenitore2));

// expected output: 2

// expected output: 2

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = (n) => {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};

let contenuto = 10;
let contenuto2 = 20;
let contenuto3 = 22;
let contenuto4 = 90;
let contenuto5 = 100;
let contenuto6 = 400;
let contenuto7 = 200;

console.log(boundary(contenuto));
console.log(boundary(contenuto2));
console.log(boundary(contenuto3));
console.log(boundary(contenuto4));
console.log(boundary(contenuto5));
console.log(boundary(contenuto6));
console.log(boundary(contenuto7));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
const epify = (a) => {
  if (a === "EPICODE") {
    return a;
  }
  if (a != "EPICODE") {
    return "EPICODE" + a;
  }
};
let epicode1 = "EPICODE";
let epicode2 = ":professionisti della programmazione";
console.log(epify(epicode1));
console.log(epify(epicode2));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
const check3and7 = (y) => {
  if (y % 3 === 0 || y % 7 === 0) {
    return "confermato";
  } else {
    return "non confermato";
  }
};
let n1 = 9;
let n2 = 14;
let n3 = 5;
let n4 = 8;
console.log(check3and7(n1));
console.log(check3and7(n2));
console.log(check3and7(n3));
console.log(check3and7(n4));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro 
 (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
let epic = "EPICODE";
console.log(reverseString(epic));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
