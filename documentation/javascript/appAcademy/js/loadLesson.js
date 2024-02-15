const units = document.querySelectorAll(".unit ")
const iframe = document.querySelector("iframe")
const lessonDisplay = document.querySelector('.lesson-display')
const unitNameDisplay = document.querySelector('.unit-display')
// let selectedLesson;

let currentAsideLesson = '';
let currentLessonArray = [];

// If lessons is clicked twice, the put focus on iframe
let focusTog = false
// const lesson
units.forEach(unit => {
    const parent = unit.parentElement;
    const lessons = parent.querySelectorAll("li > ul > li > a")

    lessons.forEach(lesson => {
        ////////////// Remove When NOT working on page
        if(lesson.hasAttribute('autofocus')){
            iframe.src = lesson.href
        }


        lesson.addEventListener('click', e => {
            // e.preventDefault() and e.stopPropagation() together stops window from going to link page
            e.preventDefault()
            e.stopPropagation()
            let selectedLesson = e.target.href;
            console.log(selectedLesson)
            iframe.src = selectedLesson
            // iframe.focus()
            let unit = e.target.parentElement.parentElement.parentElement
            let unitName = unit.querySelector("h3")

            console.log()
            
            // // Not working but it doesn't matter
            lessonDisplay.innerHTML = `&nbsp;&rarr; ${lesson.innerHTML}`
            unitNameDisplay.innerHTML = `${unitName.innerText}`
            let position = e.target.getBoundingClientRect()
            window.scroll(0,0)
            
            

            currentLessonArray.unshift(e.target.innerText)
                if(currentLessonArray.length > 2){
                    currentLessonArray.pop()
                }
                if(currentLessonArray[0] === currentLessonArray[1]){
                    iframe.focus()
                
                    currentAsideLesson = e.target
                } 

            

            focusTog = true;
            if(focusTog){
                e.target.addEventListener("click",iframeFocus)
            }

            console.log(currentLessonArray)
        })
    })
})
iframe.addEventListener('focusout', e => {
    console.log('out')
    currentAsideLesson.focus()

})
function iframeFocus(){
    iframe.focus();
    focusTog = false
}