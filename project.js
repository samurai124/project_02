// importer la bibliothèque prompot-sync
const prompt = require('prompt-sync')();
// main fonction qui calcule le nombre minimale de mouvements
function ascenseur(){
    let nomber = Number(prompt("Enter un étage :"));
    let nomber_mouvment ;
    // verifer si le nombre est pair
    if(nomber % 2 == 0){
        nomber_mouvment = nomber / 2
        console.log('le chemin :');
        for(let i = nomber ; i >= 0 ; i-=2){
            console.log(i,'\n |');
        }
    }
    // si non
    else{
        nomber_mouvment=((nomber + 1)/2)+1
        console.log('le chemin :');
        console.log(nomber,'\n |')
        console.log(nomber+1,'\n |')
        for(let i = nomber-1 ; i >= 0 ; i-=2){
            console.log(i,'\n |');
        }
    }
    console.log(`le nombre minimal de mouvements nécessaires pour atteindre l'étage ${nomber} est : ${nomber_mouvment}`)

}
ascenseur();
