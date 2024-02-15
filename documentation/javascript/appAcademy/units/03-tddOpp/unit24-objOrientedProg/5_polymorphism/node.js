class Animal{
    constructor(name,sound){
        this.name = name
        this.sound = sound
    }
    speak(){
        console.log(`The ${this.name} say ${this.sound }`)
    }
}

class Dog extends Animal{
    speak(){
        console.log("woof woof")
    }
}
const dog = new Dog
dog.speak()

