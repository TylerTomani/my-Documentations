let array = ['dog','cat','mouse','giraffe']

// array.forEach(function(el,i,array){
//     console.log(`index[${i}]: ${el}`)
//     if(i >= array.length - 1){
//         console.log(array)
//     }
// })

let myForLoop = function(array, cb){
    for(let i = 0; i < array.length; i++){
        cb(array[i], i)
    }
}

myForLoop(array, function(el,i,array){
    console.log(i + ": " + el)
})
