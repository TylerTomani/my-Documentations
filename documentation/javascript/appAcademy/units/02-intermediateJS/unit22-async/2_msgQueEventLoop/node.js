function somethingSlow() {
    setTimeout(() => {
        console.log("4000 ms") 
    }, 4000);
}

function foo3000() {
    console.log("foo 3000 ms") ;
}

function bar2000(){
    console.log("bar 2000 ms") 
    baz1000();
}

function baz1000(){
    console.log("baz 1000 ms")
}

somethingSlow();
setTimeout(foo3000,3000);
setTimeout(bar2000,2000);