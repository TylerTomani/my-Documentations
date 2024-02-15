let food = ['lettuce', 'celery', 'watermellon', 'pineapple'];

let result = food.every(function(el){
    return el.includes("e")
})

let myEvery = function(array, cb){
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        if(!cb(el)){
            return false;
        }
    }
    return true
}

result = myEvery(food,function(el){
    return el.includes('e')
})

console.log(result)