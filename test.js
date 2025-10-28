const prompt = require('prompt-sync')();
console.log("Toujours exactement un nombre qui apparaît un nombre impair de fois  !!!!!\n Entrer tous les nombres séparer par , ex : 1,2,4,1,2,4,2 ");
let nubmers = prompt("Entrer un tableau de nombres :");
nubmers = nubmers.split(",").map(Number);
console.log(nubmers);

// for(let i = 0 ; i < nubmers.length ; i++){
//     let number = nubmers[i];
//     let compteur = 0;
//     for(let j = 0 ; j < nubmers.length; j++){
//         if(number == nubmers[j] ){
//             compteur +=1
//         }
//     }
//     if(compteur % 2 != 0){
//         console.log(`${number} apparaît  impair de fois `);
//         return
//     }
// }