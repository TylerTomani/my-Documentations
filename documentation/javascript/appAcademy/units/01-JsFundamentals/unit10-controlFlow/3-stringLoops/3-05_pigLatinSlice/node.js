// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

function pigLatinWord(word){
    let newSTr = '';
    const vowels = 'aeiou';
    if(vowels.includes(word[0])){
        newStr = word + "yay"
    } else {
        for(let i = 0; i < word.length; i++){ 
            let prefix = word.slice(i,word.length); 
            let suffix = word.slice(0 , i); 
            newStr = prefix + suffix + "yay"
        }
    }
    return newStr;
}

            

            


console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("trash")); //=> "ashtray"
console.log(pigLatinWord("banana")); //=> "ananabay"