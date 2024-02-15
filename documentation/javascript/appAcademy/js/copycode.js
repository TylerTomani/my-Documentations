const copyPreCodes = document.querySelectorAll(".copy-pre-code");
let keyArray = [] // used in cmdCCopy
// Copy Event Listner
copyPreCodes.forEach(preCode => {
    preCode.addEventListener("click",clickCpy);    
    preCode.addEventListener("keydown",cmdCCopy)
})

// Cmd + c Copy
function cmdCCopy (e){
    let keyCode = e.keyCode
    keyArray.unshift(keyCode)
    let el = e.target
    el.parentElement.classList.add("textCpyAnimation")
    
    if(keyArray.length > 2){
        keyArray.pop()
    }
    

    let sum = keyArray.reduce((accum ,current ) => accum + current)
    if(sum === 158){
        navigator.clipboard.writeText(e.target.innerText);
        console.log(e.target.innerText)
        el.style.borderLeft = "2px solid white"
        el.style.borderTop = "1px solid white"
        el.style.borderBottom = "2px solid white"
        // el.style.margin = "-2% 0 0 -1%"
        el.classList.add("textCpyAnimation")
        setTimeout(() => {
            el.style.border = "0px solid black"
            // el.style.margin = "0 "
        }, 200);
        


        console.log("cmd c")

    }
}
// Click to copy
function clickCpy(e){
    let el = e.target
        // alert("text copied")
        const body = document.querySelector('body')
        const copyText = document.createElement("textarea");
        copyText.value = e.target.innerText
        e.target.appendChild(copyText)
        copyText.select();
        //Not sure what setSelRange does???
        console.log(copyText)
        copyText.setSelectionRange(0, 99999); // For mobile devices

        navigator.clipboard.writeText(copyText.value);
        e.target.removeChild(copyText)
        el.focus()
        el.style.borderLeft = "2px solid white"
        el.style.borderTop = "2px solid white"
        // el.style.margin = "-2% 0 0 -1%"
        // el.classList.add("textCpyAnimation")
        setTimeout(() => {
            el.style.border = "0px solid black"
            el.style.margin = "0 "
        }, 150);
        // Copy the text inside the text field to Clipboard
        

        
}

// function intervalCount(cb,count,delay){
//     const intboj = setTimeout(() =>{
//         cb();
//         count--;
//         if(count === 0){
//             clearInterval(intboj)
//         }
//     },delay)
// }

