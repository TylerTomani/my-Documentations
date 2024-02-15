function initials(name){
    let nameArr = name.split(" ");
    let letters = "";
    nameArr.forEach( el => {
        letters += el[0].toUpperCase()
    })
    return letters
}
console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); 
// 'BMRDTS'