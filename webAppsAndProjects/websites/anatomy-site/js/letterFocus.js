const allEls = document.querySelectorAll('.anatomy-container *')
const allElsArray = []
let currentLetterArray = []
// systems: Skeleton  / Muscles
const sysSelects = document.querySelectorAll('.system-select-header > ul > li a.sys-select')
const systemContainers = document.querySelectorAll('.system-container')
//sub-systems: 
const subSysSelects = document.querySelectorAll('a.sub-sys-select')
let sysSelectFocus = true
let subSysSelectFocus = false
const groupLinks = document.querySelectorAll('.group > h4 > a')
const groupItemsContainers = document.querySelectorAll('.group > .group-items-container > ul > li a')
let groupItemsFocused = false
const currentSystemH2 = document.getElementById('currentSystemH2')
let currentSys

// hide all systems with or w/o "show"
function hideSystemContainers(){
    systemContainers.forEach(el => {
        if(!el.classList.contains('show')){
            el.classList.remove('show')
            el.classList.add('hide')
        }
        el.classList.add('hide')
    })
}
// systems hide except "show"
function hideSystemContainersNOTshow(){
    systemContainers.forEach(el => {
        if(!el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideSystemContainersNOTshow()
// remove hide 
function removeHide(el){
    if(el.classList.contains('hide')){
        el.classList.remove('hide')
    }
}
function removeHideEls(els){
    els.forEach(el => {
        if(el.classList.contains('hide')){
            el.classList.remove('hide')
        }
    })
}
// systems
sysSelects.forEach(el => {
    el.addEventListener('focus', e  => {
        sysSelectFocus = true 
        subSysSelectFocus = true 
        groupItemsFocused = false
    });
    el.addEventListener('click', e => {
        e.preventDefault()
        currentSystemH2.innerText = e.target.innerText
        const anatomyContainer = getAnatomyContainer(e.target.parentElement)
        let systemId = e.target.id
        let systemName = getSystem(systemId)
        const systemContainer = anatomyContainer.querySelector(`.${systemName}-system`)
        if(e.target == currentSys ){
            removeHide(systemContainer)
            // console.log('=')
            const subSysSelect1 = systemContainer.querySelector('.sub-sys-select')
            subSysSelect1.focus()
        } else {
            // console.log('!=')
            toggleSystemContainer(systemContainer)
        }
        
        currentSys = e.target
    });
    
})
subSysSelects.forEach(el => {
    el.addEventListener('focus', e  => {
        sysSelectFocus = true
        subSysSelectFocus = true 

        groupItemsFocused = false
    });
})
groupLinks.forEach(el =>{
    el.addEventListener('focus', e => { 
        sysSelectFocus = true
        subSysSelectFocus = true
        groupItemsFocused= false
    });
})
groupItemsContainers.forEach(el => {
    el.addEventListener('focus', e  => {
        sysSelectFocus =false
        subSysSelectFocus =false
        groupItemsFocused = true 
    });
})
function getSystem(id){
    switch (id){
        case 'skeleton':
            return 'skeletal'
        case 'muscles':
            return 'muscular'
        default:
            print('no system clicked')
            break
    }
}
// toggle system-containers
function toggleSystemContainer(el){  
    if(el.classList.contains('show')){      
        el.classList.remove('show')
    }
    if(el.classList.contains('hide')){
        hideSystemContainers()
        el.classList.remove('hide')
    } else {
        el.classList.add('hide')
        hideSystemContainers()
    }
}

let letterGroupClicked = false
addEventListener('keydown' , e => {
    let letter = e.key.toLowerCase()
    if(sysSelectFocus || subSysSelectFocus){
        getIdElements(e)        
    }    
     if(groupItemsFocused){
        // console.log('groupItemFocused',groupItemsFocused)
        let group = getGroup(e.target.parentElement)
        let groupLink = group.querySelector('h4 > a')
        let groupItems = group.querySelectorAll('.group-items-container > ul > li > a')
        groupItems.forEach(el =>{
            if(letter == el.innerText[0].toLowerCase()){
                el.focus()
                console.log(el.innerText)
            }
        })
        if(letter == groupLink.id[0] && letterGroupClicked){
            groupLink.focus()
            console.log(groupLink.id)
            letterGroupClicked = false
        } else {

            letterGroupClicked = true
        }
    }
})
let lastPressedKey = null;
// let newIndex = 0
let currentIndex = 0
function getIdElements(e){
    currentLetterArray = []
    let anatomyContainer = getAnatomyContainer(e.target.parentElement)
    const sysSelects = anatomyContainer.querySelectorAll('.system-select-header > ul > li > a.sys-select')
    currentLetterArray = Array.from(sysSelects)
    const subSysSelects = anatomyContainer.querySelectorAll('.systems-container >.system-container > .sub-system-container > h3 > a.sub-sys-select')
    subSysSelects.forEach(el => {
        let systemContainer = getSystemContainer(el.parentElement)
        // console.log(systemContainer)
        if(!systemContainer.classList.contains('hide')){
            currentLetterArray.push(el)
            const groupLinks = systemContainer.querySelectorAll('.sub-system-container > .groups-container > .group > h4 > a')
            groupLinks.forEach(el => {
                let groupsContainer = getGroupsContainer(el.parentElement)
                if(!groupsContainer.classList.contains('hide')){
                    currentLetterArray.push(el)
                }
            })
        }
    })
    // console.log(currentLetterArray.length)
    const pressedKey = e.key.toLowerCase(); // Convert the pressed key to lowercase for case-insensitivity
    
    // // Find the index of the first element starting with the pressed key
    const newIndex = currentLetterArray.findIndex(el => el.id.toLowerCase().startsWith(pressedKey));
    // console.log(currentLetterArray[newIndex])
    if (newIndex !== -1) {
        if (lastPressedKey === pressedKey) {
          // If the same key is pressed again, go to the next element with the same starting letter
          currentIndex = (currentIndex + 1) % currentLetterArray.length;
        } else {
            // If a different key is pressed, go to the first element with the new key
            currentIndex = newIndex;
            lastPressedKey = pressedKey;
        }
        currentLetterArray[currentIndex].focus()

    }
}
// Get Parent Functions
function getGroupItemsContainer(parent){
    if(parent.classList.contains('group-items-container')){
        return parent
    } else if (parent.parentElement){
        return getGroupItemsContainer(parent.parentElement)
    } else {
        return null
    }
}
function getGroup(parent){
    if(parent.classList.contains('group')){
        return parent
    } else if (parent.parentElement){
        return getGroup(parent.parentElement)
    } else {
        return null
    }
}
function getGroupsContainer(parent){
    if(parent.classList.contains('groups-container')){
        return parent
    } else if (parent.parentElement){
        return getGroupsContainer(parent.parentElement)
    } else {
        return null
    }
}
function getSystemContainer(parent){
    if(parent.classList.contains('system-container')){
        return parent
    } else if (parent.parentElement){
        return getSystemContainer(parent.parentElement)
    } else {
        return null
    }
}
function getAnatomyContainer(parent){
    if(parent.classList.contains('anatomy-container')){
        return parent
    } else if (parent.parentElement){
        return getAnatomyContainer(parent.parentElement)
    } else {
        return null
    }
}




