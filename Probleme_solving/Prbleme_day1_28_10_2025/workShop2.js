const nubmers = [2, 3, 5, 3, 2, 5, 2];
for(let i = 0 ; i < nubmers.length ; i++){
    let number = nubmers[i];
    let compteur = 0;
    for(let j = 0 ; j < nubmers.length; j++){
        if(number == nubmers[j] ){
            compteur +=1
        }
    }
    if(compteur % 2 != 0){
        console.log(` ${number} apparaît  impair de fois `);
        return
    }
}