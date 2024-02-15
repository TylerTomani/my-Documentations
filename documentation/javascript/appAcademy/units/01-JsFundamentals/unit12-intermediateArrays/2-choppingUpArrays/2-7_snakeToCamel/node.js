function upperCase(wrd){
    let wrdArr = wrd.toLowerCase().split("");
    let upper = '';
    wrdArr.forEach( (el, i) => {
        if(i == 0){
            upper += el.toUpperCase();
        } else upper += el;
    })
    return upper;
}
function snakeToCamel(str){
    let strArr = str.toLowerCase().split("_");
    let camel = '';
    strArr.forEach(el => {
        camel += upperCase(el)
    })
    return camel;
}
console.log(snakeToCamel('snakes_go_hiss'));
// 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); 
// 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); 
// 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); 
// 'AppAcademyIsCool'
            