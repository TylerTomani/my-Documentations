let food = ['lettuce', 'celery', 'watermellon', 'pineapple'];

let myFilter = function(array,cb){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        let el = array[i];
        if(cb(el)){
            newArray.push(el)
        }
    }
    return newArray;
}

let result = myFilter(food,function(el){
    return el.includes('a')
})

console.log(result)