function colorPicker(color,...colors){
    let string = "I like the colors " + color;
    colors.forEach(clr => {
        string +=  ", " + clr;
    })
    return string;
}

console.log(colorPicker("Red","Blue","Green","Orange"))

function totalSum(...args){
    let sum = 0;
    args.forEach(arg => {
        sum += arg;
    })
    return sum
}
console.log(totalSum(1,5,8,6))