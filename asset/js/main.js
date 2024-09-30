/* console.log('ciao'); */

// FASE 1: CREIAMO I DUE DATI KM E ETA'
let kilometer; 
let age;
let ticket_price = 0.21;

// PROMPTIAMO LE SUEGUENTI VARIABLI   
kilometer = Number(prompt('inserisci i chilometri'));
age= Number(prompt('inserisci gli anni'));

//CALCOLIAMO SUBTOTAL
let subtotal = kilometer * ticket_price ;

//LOGGHIAMO KILOMETER, AGE E SUBTOTAL, 
console.log(kilometer);
console.log(age);
console.log(subtotal);


// FASE 2: CREARE LE CONDIZIONALI DI ETA'


if (age < 18){
    console.log((subtotal / 20) *100 );

    
}else if (age > 65){
    console.log((subtotal / 40) *100 );
}else{
    console.log(subtotal);
    
}