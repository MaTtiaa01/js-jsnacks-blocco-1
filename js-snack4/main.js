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
let enjoyParty = false
//comunicagli se può partecipare o no alla festa.
let i = 0;
let nameCheck;
while (i < nameList.length) {
    nameCheck = nameList[i];
    console.log(nameCheck);
    if (nameCheck === userName) {
        enjoyParty = true
    }else {
        enjoyParty = false
    }



    i++
}


console.log("sono fuori da while");

if (enjoyParty) {
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