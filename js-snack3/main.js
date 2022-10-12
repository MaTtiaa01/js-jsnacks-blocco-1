//Il software deve chiedere per 10 volte all’utente di inserire un numero.

let userNumber;
function somma(){

    userNumber = 0
    for (let i = 0; i < 10; i++) {
        userNumber = Number(prompt("Inserire un numero"));
        console.log(userNumber);
        
    }
}



//Il programma stampa la somma di tutti i numeri inseriti. 

let somma = document.querySelector(".somma");

somma.innerHTML = calcolo;


