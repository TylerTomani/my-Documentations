let intervalCountDown = function(count,delay,cb){
    const intervalObj = setInterval(function(){
        cb();
        count--;
        if(count ===0){
            clearInterval(intervalObj)
        }
    },delay)
}

let sayHey = function(){
    console.log("Hey")
}
intervalCountDown(4,1000,sayHey)

let intervalCount = function(delay,cb){
    const intervalObj = setTimeout(() => {
       cb();
       
        
    }, delay);
}
let dontStop = function(){
    console.log("don't stop")
}
intervalCount(4500,dontStop)