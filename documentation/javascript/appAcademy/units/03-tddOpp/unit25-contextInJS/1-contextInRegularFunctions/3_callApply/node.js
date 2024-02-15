class Dog {
    constructor(name){
        this.name = name;
    }
}
class Cat {
    constructor(name){
        this.name = name
    }
    purrNTime(n){
        for(let i = 0; i < n; i++){
            console.log(`${this.name} says: meow`)
        }
    }
}

const dog = new Dog("Buba");
const cat = new Cat("Daisy");

cat.purrNTime.call(dog,2);
cat.purrNTime.apply(cat,[3])
