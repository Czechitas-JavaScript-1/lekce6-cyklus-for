// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

let i = 0;
while (i <= 10) {
    console.log("S while: " + i);
    i++;
}

/* for (let i = 0; i <= 10; i++) {
  console.log(i); 
} */

console.log('-------------------');



// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

let j = 0;
while (j < 11) {
    console.log("S while: " + j);
    j++;
}

/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

console.log('-------------------');



// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

let k = 10;
while (k >= 0) {
    console.log("S while je to: " + k);
    k--;
}


/*for (let i = 10; i >= 0; i--) {
  console.log(i);
}*/

console.log('-------------------');


/*

//pomocí while

let i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

let podminka = true;
let nahoda;

while (podminka) {
  nahoda = Math.floor(Math.random() * 10);
  if (nahoda > 5) {
    podminka = false;
  }

  console.log(nahoda);
}

//vnořování forů

for (let i = 0; i < 10; i++) {
  for(let j = 0; j < 5; j++) {
    console.log(i + " " + j);
  }
}

*/