const prompt = require('prompt-sync')()
let NB = Number(prompt("Enter the number of Bottles : "))
let c = 0;
do{
    NB -= 3
    NB += 1
    c += 3
}while(NB >= 3)
c = c+NB
console.log(c);


