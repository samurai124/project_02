/* knowing 
    if the modilo of a number on 3 equals to 0 maens the the nubmer is devided by 3 
    and the same for the number 5 
*/
const prompot = require('prompt-sync')();
function FizzBuzz(){
    let N = Number(prompot("Entrer N :"))
    for(let i = 1 ; i <= N ; i++){
        if(i % 3 == 0 && i %  5 == 0 ){
            console.log(`${i} is TechLead`);
        }
        else if(i % 3 == 0){
            console.log(`${i} is Tech`);
        }
        else if(i %  5 == 0){
            console.log(`${i} is Lead`);
        }
        else{
            console.log(i);
        }
    }
}
FizzBuzz()