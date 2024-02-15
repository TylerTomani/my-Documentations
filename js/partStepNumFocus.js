const homelink = document.getElementById('homelink')
const parts = document.querySelectorAll('.dropPart')
const stepsContainers = document.querySelectorAll('.steps-container')

let partsFocused = true

function hideStepsContainers(){
    stepsContainers.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
hideStepsContainers()

function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
    } else {
        return null
    }
}
addEventListener('keydown', e => {
    let key = e.key.toLowerCase()
    if(key === 'h'){
        homelink.focus()
    }
    if(partsFocused){
        partFocus(key)
        if(key === 'p'){
            part01.focus()
        }
    } else if(!partsFocused){
        const part = getPartContainer(e.target.parentElement)
        if(key === 'p'){
            part.focus()
        }
    }
})
function partFocus(key){
    parts.forEach(el => {
        if(key === el.innerText[5]){
            el.focus()
        }
    })
}

parts.forEach(el => {
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            toggleStepsContainer(e.target)
        }
    })
    el.addEventListener('click', e => {
        const children = e.target.querySelectorAll('*')
        children.forEach(el => {
            toggleStepsContainer(e.target)
        })
        e.preventDefault()
        toggleStepsContainer(e.target)
    })
    el.addEventListener('focusout', e => {
        // console.log('focusout')
    })
    el.addEventListener('focus', e => {
        // console.log('focus')
    })
})

function toggleStepsContainer(el){
    const part  = getPartContainer(el.parentElement)
    const stepsContainer = part.querySelector('.steps-container')
    if(stepsContainer.classList.contains('hide')){
        hideStepsContainers()
        stepsContainer.classList.remove('hide')
        addTabIndex(stepsContainer)
    } else {
        stepsContainer.classList.add('hide')
    }
}

function addTabIndex(container){
    console.log(container)
    let els = container.querySelectorAll('.chatgpt-question-container > .chatgpt-question')
    els.forEach(el => {
        el.setAttribute('tabindex','1')
    })
}