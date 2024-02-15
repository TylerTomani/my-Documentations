const unitDropLink = document.querySelectorAll('.unit')
const unitDisplay = document.querySelector('.unit-display')

const sideMenu = document.querySelector(".side-menu")
const dropTriangle = document.querySelector(".drop-triangle")
const header = document.querySelector('header')
let currentUnit = ''
let currentLesson = ''
let currentWidth = 0;
let toggle = false;

let queryWidth = 720

addEventListener("DOMContentLoaded", e => {
    // delete the following line when done
// iframe.src = "02-awkCommandLineBasics/02-02-recordsFieldsPatterns/02-02-recordsFieldsPatterns.html"
    if(innerWidth < queryWidth){
        sideMenu.classList.add("hide")
    }
    currentWidth = innerWidth;
})



function hideLessons(){
    unitDropLink.forEach(unit => {
        const parent = unit.parentElement
        const lessons = parent.querySelector("ul ")
        lessons.classList.add('hide')
    })
}
hideLessons();

unitDropLink.forEach(unitlink =>{
    unitlink.addEventListener("click",e => {

        e.preventDefault();
        e.stopPropagation();
        const parent = unitlink.parentElement
        const lessons = parent.querySelector("ul ")
        if(!lessons.classList.contains('hide')){
            lessons.classList.add('hide')
        } else if(lessons.classList.contains('show')){
            lessons.classList.remove('show')
            lessons.classList.add('hide')
        }
        else {
            hideLessons()
            lessons.classList.remove('hide')
        }
        console.log(lessons.classList)
        let unitNumber = parent.innerText.slice(0,7)
        unitDisplay.innerText = unitNumber

        // we might need to scroll to the position of the unit when more are added
        // window.scrollTo(0, 0);

    })
})

header.addEventListener("mouseover", e => {
    if(sideMenu.classList.contains("hide")){
        // toggle = false
        sideMenu.classList.remove("hide")

    }
})





// Drop triangle toggles side units list on small screens less than 705px

dropTriangle.addEventListener('click', e => {
    if(!toggle){
        dropTriangle.innerHTML = currentLesson
        sideMenu.style.display = "block"
        sideMenu.classList.remove("hide")
        sideMenu.classList.add("showSide")
    } else {
        dropTriangle.innerHTML = "&#9660;"
        sideMenu.style.display = "none"
        sideMenu.classList.add("hide")
    }

    toggle = !toggle;
})
dropTriangle.addEventListener('keydown', e => {
    if(e.keyCode === 13){
        if(!toggle){
            dropTriangle.innerHTML = "&#9656;"
            sideMenu.style.display = "block"
            sideMenu.classList.remove("hide")
            sideMenu.classList.add("showSide")
        } else {
            dropTriangle.innerHTML = "&#9660;"
            sideMenu.style.display = "none"
            sideMenu.classList.add("hide")
        }


    toggle = !toggle
}
})
const unitsDropTriangle = document.querySelector(".units-list-drop-triangle")

// dropTriangle.addEventListener('mousenter', e => {

//     if(currentWidth < queryWidth){

//         dropTriangle.innerHTML = "&#9656;"
//         sideMenu.style.display = "block"
//         sideMenu.classList.remove("hide")
//     }

// })
// dropTriangle.addEventListener('mouseleave', e => {

//     if(currentWidth < queryWidth){

//         // toggle = !toggle  
//         dropTriangle.innerHTML = "&#9656;"
//         sideMenu.style.display = "block"
//         sideMenu.classList.add("hide")
//     }
    

//     // toggle = !toggle  
// })

// On small screen when units list appears if triangle is clicked at top left of page
// if you hover over the iframe, the units list will dissapear


iframe.addEventListener("mouseenter", e => {
    if(innerWidth < queryWidth){

        sideMenu.style.display = 'none'
        sideMenu.classList.add("hide")
        sideMenu.classList.remove("showSide")
    }
})
addEventListener("resize", e => {
    if(innerWidth > queryWidth){
        sideMenu.style.display = 'block'
        sideMenu.classList.remove("hide")
        sideMenu.classList.add("showSide")
    } else {
        sideMenu.style.display = 'none'
        sideMenu.classList.add("hide")

    }
})
iframe.addEventListener('focusin', e => {
    if(currentWidth < queryWidth){
        sideMenu.style.display = 'none'
        sideMenu.classList.add("hide")
        sideMenu.classList.remove("showSide")
        console.log("hasfocus")
    }
})


