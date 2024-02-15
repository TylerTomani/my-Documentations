function fizzBuzz(max){
    let nums = " ";
    for(let i = 0; i < max; i++){
        if( (i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)){
            nums += i + " ";
        }
    }
    console.log(nums)
}
fizzBuzz(20);
            