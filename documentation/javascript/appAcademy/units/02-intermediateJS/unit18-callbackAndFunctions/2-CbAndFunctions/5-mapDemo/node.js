let animals = ["dog", "cat", "monkey", "giraffe"];

let people = ['aaron','bobby','joe','tony'];

// let newArray = animals.map((el,i,array) => {
//     return el.toUpperCase();
// })

let myMap = function(array,cb){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        let upperPerson = cb(el);
        newArray.push(upperPerson);
    }
    return newArray
}

let newPeople = myMap(people,function(el) {
    return el.toUpperCase()
})
console.log(newPeople)
