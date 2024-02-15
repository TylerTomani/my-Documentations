class Animal {
 constructor(name,sound){
  this.name = name;
  this.sound = sound;
 }

 speak(){
    console.log(`${this.name} says "${this.sound}"`)
}
 static pet(animal){
  console.log(`You attempted to pet ${animal.name}`);
 }
}
class Dog extends Animal{
    constructor(name){
        super(name,"woof");
    }
};
 const skip = new Dog("skip");
 skip.speak();
 Dog.pet(skip);

class Fruit {
    constructor(color,taste){
        this.color = color;
        this.taste = taste;
    }
    eating(){
        console.log(`The ${this.constructor.name} taste ${this.taste}`);
    }
}
class Apple extends Fruit{};
const apple = new Apple("red","bitter")
apple.eating()