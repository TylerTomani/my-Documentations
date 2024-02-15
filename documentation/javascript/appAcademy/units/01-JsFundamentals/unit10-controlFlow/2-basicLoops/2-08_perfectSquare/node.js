function perfectSquare(num){
    for( let i = 2; i < num; i++){
        if( i * i === num){
            return true;
        }
        return false
    }
}
console.log(perfectSquare(4)); // true
console.log(perfectSquare(5)); // false
            