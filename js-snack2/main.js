//L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("inserire una parola");
const secondWord = prompt("inserire un altra parola");


//Il software stampa prima la parola più corta, poi la parola più lunga.

if (firstWord.length > secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
}else if (secondWord.length > firstWord.length) {
    console.log(secondWord);
    console.log(firstWord);
} else{
    console.log("le parole sono lunghe uguali");
}