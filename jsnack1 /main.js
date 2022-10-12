//L’utente inserisce due numeri in successione, con due prompt.

const firstNumber = prompt("Inserire un numero");

const secondNumber = prompt("Inserire un numero");

let bigNumber = document.querySelector(".number")
//Il software stampa il maggiore.
if (firstNumber > secondNumber) {
    console.log(firstNumber);
    bigNumber.innerHTML = firstNumber;
}else if (firstNumber === secondNumber){
    console.log("");
    bigNumber.innerHTML = "pari";
}else{
    console.log(secondNumber);
    bigNumber.innerHTML = secondNumber;
}