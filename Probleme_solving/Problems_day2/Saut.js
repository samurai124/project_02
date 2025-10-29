/* 
    i used the this formula to solve the probleme
    f(n) = f(n-1)+f(n+1) 
*/
const prompot = require('prompt-sync')();
function saut(N){
    if (N == 1) {
        return 1
    }
    else if(N == 2){
        return 2
    }
    else{
        return saut(N-1)+saut(N-2)
    }
}
let N = Number(prompot("ENtrer N :"))
console.log(saut(N));

