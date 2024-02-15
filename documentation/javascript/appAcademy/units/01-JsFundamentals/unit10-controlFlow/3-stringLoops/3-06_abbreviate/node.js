const vowels = 'aeiou';
function abbreviate(wrd){
    let newStr = '';
    for(let i = 0; i < wrd.length; i++){
        if(!(vowels.includes(wrd[i]))){
            newStr += wrd[i];
        }
    }
    return newStr;
}
console.log(abbreviate("wonderful"))
console.log(abbreviate("accordian"))