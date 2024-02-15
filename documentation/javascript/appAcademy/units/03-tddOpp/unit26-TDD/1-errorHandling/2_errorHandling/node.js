// const first = new Error("I am an error")
// const second = Error("I too am also an error");
// console.log(first)
// console.log(second)

function enterANumber(num){
    if(typeof num !== "number"){
        throw new Error("Please enter a number")
    } else {
        return "Yes, number was entered"
    }
}
console.log(enterANumber(2))
console.log(enterANumber("Apple"))
console.log(enterANumber(3))