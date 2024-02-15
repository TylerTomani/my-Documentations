let obj = {name: "Rose", cats: 2}
for(let key in obj){
    console.log(key,": ",obj[key])

}

let dog = {
    name: "Wishbone"
}

dog.bark = function(){
    console.log("Bark Bark");
}

dog["speak"] = function(string){
    console.log(dog.name + " says " + string )
}
dog.bark();
dog.speak("Woof");

let employee = {name: "George", age: 32};
console.log(Object.keys(employee))

console.log(Object.values(employee))
console.log(Object.entries(employee))

let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

function printObj(obj){
    for(let key in obj){
        console.log(key + " - " + obj[key]);
    }
}
printObj(bootcamp)

