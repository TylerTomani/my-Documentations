let blockThread = function(){
    let count = 0;
    if(count < 600000000000){
        count++
        console.log(count)
    }
    console.log("blockThread is done")
}

setTimeout(() => {
    console.log("secondTimeout takes 1 second")
}, 0);


blockThread()