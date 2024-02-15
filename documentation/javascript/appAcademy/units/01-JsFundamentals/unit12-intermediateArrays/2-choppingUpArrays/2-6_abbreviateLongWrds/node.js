function removeVowels(wrd){
    const vowels = 'aeiou';
    let abbr = ''
    for(let i = 0; i <wrd.length; i++){
        let ch = wrd[i].toLowerCase();
        if(!vowels.includes(ch)){
            abbr += ch;

        }
    }
    return abbr;
}
function abbreviateWords(str){
    let strArr = str.toLowerCase().split(" ");
    let newStrArr = [];
    for(let i = 0; i < strArr.length; i++){
        let wrd = strArr[i];
        if(wrd.length > 4){
            newStrArr.push(removeVowels(wrd))
        } else newStrArr.push(wrd)
    }
    return newStrArr.join(" ")
}
console.log(abbreviateWords('what a wonderful place to live'));
 // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message '));
 // she snds an xcllnt mssg
            