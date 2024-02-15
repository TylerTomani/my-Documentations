function yellStr(str){
    return str.toUpperCase();
}
let newStr = yellStr("not yelling");
console.log(newStr) // NOT YELLING

            
function yellStrings(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(yellStr(arr[i]));
    }
    return newArr;
}
const nums = ["one","two","three"];
console.log(yellStrings(nums))

function isPrime(num){
    if(num < 2){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false


console.log(isPrime(4))

function laligatSum(num){
    let sum = 0;
    for(let i = 0; i < num; i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    return sum;
}
console.log(laligatSum(10)) // 17
console.log(laligatSum(12)) // 28
            
            
            



            