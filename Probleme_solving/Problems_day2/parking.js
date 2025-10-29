const park = [1,1,1,0,1,1,0,1,1,0];
let index ;
for(let i = 0 ; i < park.length ; i++ ){
    if(park[i] == 0){
        index = i
        break
    }
}
console.log(index);
