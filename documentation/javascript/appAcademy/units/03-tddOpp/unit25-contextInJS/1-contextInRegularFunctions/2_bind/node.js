class Cat{
 purr(){
  console.log("Meow");
 }
 purrMore(){
  this.purr();
 }
}
const cat = new Cat();
let sayMeow = cat.purrMore
// sayMeow()
// this will produce a TypeError: properties of purrMore() are undefined
let boundCat = sayMeow.bind(cat)
boundCat()
// prints Meow

function hello() {
  return `Hello ${this.firstName}`;
}

const derek = {
  firstName: 'Derek'
};

console.log(hello.bind(derek)());