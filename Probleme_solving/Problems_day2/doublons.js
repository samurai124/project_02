/*
i used includes to check if the number exists in the new array in not i ll add it to the new array
*/ 
const prompot = require('prompt-sync')();
const prompt = require('prompt-sync')();
console.log("Toujours exactement un nombre qui apparaît un nombre impair de fois  !!!!!\n Entrer tous les nombres séparer par , ex : 1,2,4,1,2,4,2 ");
let nubmers = prompt("Entrer un tableau de nombres :");
nubmers = nubmers.split(",").map(Number);
const filtred = []
for(let i = 0 ; i < nubmers.length ; i++){
    if(!filtred.includes(nubmers[i])){
        filtred.push(nubmers[i])
    }
}
console.log(filtred);
