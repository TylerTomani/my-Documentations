// let foo = function(){
//     let val = "Tacos";
//     return val
// }
// let result = foo();
// console.log(result)

// let foo = function(){
//     let bar = function(){
//         console.log("intersting...");
//     }
//     return bar
// }
// console.log(foo())


let foo = function(){
    let bar = function(){
        console.log("interesting...")
    }
    return bar;
}
let resutl = foo();
resutl();