// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10

console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS

let cisla = [];
let i = 0;

while (i <= 10) {
    i++;
    cisla.push(i);
}

console.log(cisla);



// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

let cisla2 = [];

while (i < 10) {
    i++;
    cisla2.push(i);
}

console.log(cisla2);



// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

let cisla3 = [];

while (i >= 0) {
    i++;
    cisla3.push(i);
}

console.log(cisla3);