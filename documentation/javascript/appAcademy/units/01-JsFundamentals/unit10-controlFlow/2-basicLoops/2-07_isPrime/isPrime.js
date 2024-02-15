let num = 8
function isPrime(num){
    console.log("num % i     | i %  num ")
    for(let i = 0 ; i <= num + 2; i++){
        // console.log(`${i} % ${num} = ${i % num}`)
        console.log(` ${num}  % ${i} = ${num % i} | ${i} % ${num} = ${i % num} `)
    }
    // console.log("i % num ")
    

    
}

isPrime(num)
// console.log(isPrime(8))