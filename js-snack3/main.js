//Il software deve chiedere per 10 volte all’utente di inserire un numero.

// let userNumber;
// let sum;

// let somma = document.querySelector(".somma");
//     for (let i = 0; i < 10; i++) {
//         userNumber = Number(prompt("Inserire un numero"));
//         console.log(userNumber);
//         sum += userNumber;
//     }

// somma.innerHTML = sum;


//Il programma stampa la somma di tutti i numeri inseriti. 
let userNumber;
let sum = 0
let i = 0;
let somma = document.querySelector(".somma");
while (i < 10) {
    userNumber = Number(prompt("Inserire un numero"));
    console.log(userNumber);
    sum += userNumber;

    i++
}

console.log(sum);
somma.innerHTML = sum;







