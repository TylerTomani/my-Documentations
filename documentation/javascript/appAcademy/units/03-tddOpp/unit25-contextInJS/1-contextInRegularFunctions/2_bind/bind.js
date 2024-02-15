let c1 = {
 x: 20,
 y: 68
}
let c2 = {
 x: 7,
 y: 102
}
function printPosition(){
    console.log("x:",this.x,"y:",this.y)
}

let c1Func = printPosition.bind(c1);

c1Func();
