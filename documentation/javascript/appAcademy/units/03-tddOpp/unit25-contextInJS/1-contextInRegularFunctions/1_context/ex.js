function sayHey(){
    console.log("Hey");
}

// global.setTimeout(sayHey,1000);

class Cat{
    purr(){
        console.log("Meow")
    }
    purrMore(){
        this.purr()
    }
}
const cat = new Cat()
global.setTimeout(cat.purr,1000)
global.setTimeout(cat.purrMore,1000)
