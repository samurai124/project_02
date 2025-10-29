let list = [1, 2, 3]
let newlist = [...list]
for(let i = list.length-1 ; i>=0 ; i--){
    newlist.push(list[i])
}
console.log(newlist);
