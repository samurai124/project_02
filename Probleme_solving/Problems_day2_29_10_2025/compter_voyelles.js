const prompt = require('prompt-sync')()
let chaine = String(prompt("Entrer une chaîne : "))
let voyelles = ['a','e','i','o','u','y'];
let  nombre_voyelles = 0;
for(let i = 0 ; i< chaine.length ; i++){
    if(voyelles.includes(chaine[i])){
        nombre_voyelles ++
    }
}
console.log("Nombre de voyelles :",nombre_voyelles);