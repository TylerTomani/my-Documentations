function tripleTrue(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i + 1]){
            count++;
            if( count >= 3){
                return true
            }
        }
    }
    
    return false
}
console.log(tripleTrue('caaabb')); // true
console.log(tripleTrue('terrrrrible')); // true
console.log(tripleTrue('runninggg')); // true
console.log(tripleTrue('bootcamp')); // false
console.log(tripleTrue('e')); // false
            