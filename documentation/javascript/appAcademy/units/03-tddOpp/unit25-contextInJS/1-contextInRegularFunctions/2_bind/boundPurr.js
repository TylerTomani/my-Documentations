class Cat{
    purr(){
        console.log("Meow");
    }
    purrMore(){
        this.purr()
    }
}
let cat = new Cat()
let boundPurr = cat.purrMore.bind(cat)
global.setTimeout(boundPurr,1200);