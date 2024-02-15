let createCounter = function(){
    let count = 0;
    return function(){
        count += 1;
        return count;
    }
}
let newCounter = createCounter();
console.log(newCounter())
console.log(newCounter())

function palindrome(string){
    function reverseString (){
        return string
            .split("")
            .reverse()
            .join("")
    }
    return string === reverseString()
}

let reverseString = palindrome("Bob did dog")
console.log(reverseString)