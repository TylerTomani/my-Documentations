function uncompress(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        let letter = str[i];
        let times = Number(str[i + 1]);
        for(let j = 0; j < times; j++){
            newStr += letter;
        }
    }
    return newStr;
}
console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
            