function safeDivide(a,b){
    if(b == 0){
        throw new Error("Can't divide by zero")
    } else {
        return a / b;
    }
}
try {
    console.log(safeDivide(8,0));
} catch (error){
    console.error(`${error.name} : ${error.message}`)
    return
} finally {
    console.log("Always runs")
}