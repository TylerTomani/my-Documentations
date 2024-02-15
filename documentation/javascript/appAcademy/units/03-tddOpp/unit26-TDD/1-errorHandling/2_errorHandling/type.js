function callTheArg(arg){
    arg();
}
try {
    callTheArg(40);
    console.log("Call successful")
} catch (error){
    if( error instanceof TypeError){
        console.error(`Wrong type ${error.message}`)
    } else {
        console.error(`${error.message}`)
    }
}
console.log("Done")
