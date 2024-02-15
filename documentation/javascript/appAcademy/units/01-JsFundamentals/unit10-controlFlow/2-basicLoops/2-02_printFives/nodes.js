function printFives(max){
    let fives = " ";
    for( let i = 0; i < max; i += 5){
        fives += i + " ";
    }
    console.log(fives)
}
printFives(15) // 0 5 10 15
printFives(28) // 0 5 10 15 20 25 
            