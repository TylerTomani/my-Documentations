function arrayHasEl( arr, el ){
    if(arr.indexOf(el) != -1 ){
        return true
    }
    return false
}
console.log(arrayHasEl([1,5,20,40], 20))
console.log(arrayHasEl(["cat","mouse","dog"], "giraffe"))
            