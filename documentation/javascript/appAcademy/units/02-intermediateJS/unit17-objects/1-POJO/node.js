
let dog = {
    name: "Henrey",
    age: 4,
    color: "black"
}

let printObj = function(obj){
    for(let key in obj){
        console.log(key + " " + obj[key])


    }
}

printObj(dog)