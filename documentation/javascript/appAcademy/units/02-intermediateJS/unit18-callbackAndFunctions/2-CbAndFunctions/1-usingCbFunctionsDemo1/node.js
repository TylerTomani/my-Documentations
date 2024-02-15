let foo = function(){
    return (function(){
        return "This is a returned function"
    })
}
let result = foo();
console.log(result())