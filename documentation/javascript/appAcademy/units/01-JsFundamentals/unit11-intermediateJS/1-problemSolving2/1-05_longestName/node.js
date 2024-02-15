function longestName(arr){
    let longestName = "";
    arr.forEach( el => {
        if(el.length > longestName.length)
            {
                longestName = el
            }
        })
        return longestName;
}
testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
"Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
"Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]
console.log(longestName(testNames)); // "Christopher"
            
            
// function longestName(arr){
//     let longestName = "";
//     for(let i = 0; i < arr.length ; i++){ 
//         if(arr[i].length > longestName.length ) {
//             longestName = arr[i];
//         }
//     }
//     return longestName;
// }

// testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
// "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
// "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

// console.log(longestName(testNames)); // "Christopher"
            