 class Person {
    constructor(firstName){
        this.firstName = firstName;
    }
    greet(){
        // return `${this.firstName} say Hey`
        console.log(this)
    }
    
}

const kristen = new Person("Kristen");
console.log(kristen.firstName)
kristen.greet()

console.log(Person.firstName)