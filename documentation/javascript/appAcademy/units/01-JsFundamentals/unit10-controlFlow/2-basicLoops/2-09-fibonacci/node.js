function fibonacci(length){
    if(length <= 1){
        return [1];
    }
    let fib = [1,1];
    while(fib.length < length){
        let last = fib[fib.length - 1];
        let secondLast = fib[fib.length - 2];
        let current = last + secondLast;
        fib.push(current);
    }
    return fib
}
console.log(fibonacci(6)) 
console.log(fibonacci(3)) 
console.log(fibonacci(12)) 
