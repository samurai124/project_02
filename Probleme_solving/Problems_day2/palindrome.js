const prompt = require('prompt-sync')();

let word = prompt('Enter a word :');
let palindrome = true
for(let i = 0 ; i < word.length ; i++){
    for(let j = word.length ; j > 0 ; j--){
        if (word[i] != word[j]) {
            palindrome = !palindrome
        }
    }
}
console.log(palindrome);
