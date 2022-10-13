//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,

const nameList = [
    'mattia',
    'daniela',
    'fabio',
    'riccardo',
    'andrea'
]


//chiedi all’utente il suo nome 

const userName = prompt("Qual'è il tuo nome?");

//comunicagli se può partecipare o no alla festa.
let i = 0;
let nameCheck;
while (i < nameList.length) {
    nameCheck = nameList[i];
    console.log(nameCheck);
    i++
    if (nameCheck === userName) {
        console.log("puoi entrate");
    }else{
        console.log("non puoi entrare");
    }
}




console.log("sono fuori da while");

if (nameCheck === userName) {
    console.log("puoi entrate");
}else{
    console.log("non puoi entrare");
}



// altra soluzione
console.log("######### altra soluzione #######");

if (nameList.includes(userName)) {
    console.log("puoi entrate");
}else{
    console.log("non puoi entrare");
}