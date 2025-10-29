/*


*/
const list =  [2, 4, 6, -3, 5, 7] 
let somme = 0 
for(let i = 0 ; i < list.length ; i++){
    if(list[i] < 0){
        break
    }
    somme += list[i]
}
console.log(somme);
