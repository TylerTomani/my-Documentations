function strangeSums(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let num1 = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            let num2 = arr[j];
            if(num1 + num2 === 0){
                count++;
            }
        }
    }
    return count
}
console.log(strangeSums([2, -3, 3, 4, -2])); // 2
console.log(strangeSums([42, 3, -1, -42])); // 1
console.log(strangeSums([-5, 5])); // 1
console.log(strangeSums([19, 6, -3, -20])); // 0
console.log(strangeSums([9])); // 0