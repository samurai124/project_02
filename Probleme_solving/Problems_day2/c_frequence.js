const prompt = require('prompt-sync')()
let word = prompt("Enter a word : ")
let wordLetteres = []
for(let i = 0 ; i < word.length ; i++){
    if(!wordLetteres.includes(word[i])){
        wordLetteres.push(word[i])
    }
}
console.log(wordLetteres);
for(let i = 0 ; i <wordLetteres.length;i++){
    let compteur = 0;
    for(let j = 0 ; j < word.length ; j++){
        if(wordLetteres[i] == word[j]){
            compteur += 1
        }
    }
    console.log(`the letter ${wordLetteres[i]} got reapated ${compteur} times`);
}
