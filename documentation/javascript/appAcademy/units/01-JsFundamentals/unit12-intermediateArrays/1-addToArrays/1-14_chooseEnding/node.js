function chooseEnding(arr, suffix){
    let newArr =[];
    for(let i = 0; i < arr.length; i++){
        let el  = arr[i];
        if(el.endsWith(suffix)){
            newArr.push(el)
        }
    }
    return newArr;
}
console.log(chooseEnding(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseEnding(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseEnding(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseEnding(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]
            