/* console.log('ciao'); */

// FASE 1: CREARE I DUE DATI (PROMPT) KM E ETA'
let kilometer =parseInt; 
let age;
let ticket_price = 0.21;
let subtotal = kilometer * ticket_price;
// PROMPTARE LE SUEGUENTI VARIABLI   
kilometer= prompt('inserisci i chilometri');
age= prompt('inserisci gli anni');
//LOGGARE  KILOMETER, AGE E SUBTOTAL, PER VEDERE SE FUNZIONA IL CALCOLO
console.log(kilometer);
console.log(age);
console.log(subtotal);
// FASE 2: CREARE LE VARIABILI DI ETA'

if (age < '18'){
    console.log((subtotal - 20) / subtotal *100);
    
}