const list = [1, 2, 3,4,5,6,7,9] ;
for(let i = 0 ; i < list.length ; i++){   
    if(list[i] != i+1){
        console.log(`le nomber est manque : ${i+1}`);
    }
}