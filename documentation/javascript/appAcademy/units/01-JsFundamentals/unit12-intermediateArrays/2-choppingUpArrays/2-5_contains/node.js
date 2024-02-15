function containsWord(str,target){
    let strArr = str.split (" ");
    for(let i = 0; i < strArr.length ; i++){
        let wrd = strArr[i];
        if( wrd.toLowerCase() === target.toLowerCase()){
            return true
        }
    }
    return false
}

console.log(containsWord('sounds like a plan', 'like')); 
// true
console.log(containsWord('They are great', 'they')); 
// true
console.log(containsWord('caterpillars are great animals', 'cat')); 
// false
console.log(containsWord('Cast the net', 'internet')); 
// false
            