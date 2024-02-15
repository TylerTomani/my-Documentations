const obj1 = { 
    name: "Tom",
    age: 30
}
function printObj(obj){
    for(let key in obj){   
        console.log(key + " " + obj[key]);
    }
}
let obj2 = obj1;
obj2.name = "Billy Joe"
printObj(obj1)
printObj(obj2)