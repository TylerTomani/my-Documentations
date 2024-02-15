class ExampleParent{
 print(arg){
  console.log(arg);
 }
}

class ExampleChild extends ExampleParent {
 print(args){
  args.forEach(arg => super.print(arg))
 }
}
const numArray = [1,2,3,4];
const newChild = new ExampleChild
newChild.print(numArray)