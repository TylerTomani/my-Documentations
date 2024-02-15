function sum(arr){
    let total = 0;
    arr.forEach( el => {
        total += el;
    })
    return total;
}
function allElseEqual(arr){
    let total = sum(arr);
    if(arr.includes(total * .5)){
        return total * .5
    }
    return null
}
console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4])); // null
            