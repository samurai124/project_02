// importer la bibliothèque prompot-sync
const prompt = require('prompt-sync')();
// main fonction qui calcule le nombre minimale de mouvements
function ascenseur(){
    let nomber = Number(prompt("Enter un étage :"));
    let nomber_mouvment ;
    if(nomber % 2 == 0){
        nomber_mouvment = nomber / 2
    }
    else{
        nomber_mouvment=((nomber + 1)/2)+1
    }
    console.log(`le nombre minimal de mouvements nécessaires pour atteindre l'étage ${nomber} est : ${nomber_mouvment}`)
}
ascenseur();
