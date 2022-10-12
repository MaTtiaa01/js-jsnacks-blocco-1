//L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("inserire una parola");
const secondWord = prompt("inserire un altra parola");


//Il software stampa prima la parola più corta, poi la parola più lunga.

let longWordEl = document.querySelector(".long_word");
let shortWordEl = document.querySelector(".short_word");

if (firstWord.length > secondWord.length) {
    console.log(firstWord);
    console.log(secondWord);
    longWordEl.innerHTML = firstWord;
    shortWordEl.innerHTML = secondWord;
}else if (secondWord.length > firstWord.length) {
    console.log(secondWord);
    console.log(firstWord);
    longWordEl.innerHTML = secondWord;
    shortWordEl.innerHTML = firstWord;
} else{
    console.log("le parole sono lunghe uguali");
    shortWordEl.innerHTML = "le parole sono lunghe uguali";
    longWordEl.innerHTML = "le parole sono lunghe uguali";
}