class Cat {
 constructor(name){
  this.name = name
 }
 sayName(){
  console.log(`${this.constructor.name}'s is ${this.name}`)
 }
}

class Dog {
 constructor(name){
  this.name = name
  }
}
const cat = new Cat("Betty")
const dog = new Dog("Skippy")
let nameFunc = cat.sayName
let sayDog = nameFunc.bind(dog)
let sayCat = nameFunc.bind(cat)
sayDog()
sayCat()