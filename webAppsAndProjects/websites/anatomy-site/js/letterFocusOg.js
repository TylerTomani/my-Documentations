const myMris = document.getElementById('myMris')
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

const subGroupLinks = document.querySelectorAll('.sub-group > h5 > a')
const subGroupItemsContainers = document.querySelectorAll('.sub-group > .group-items-container > ul > li a')
let subGroupLinksFocused = false
let subGroupItemsFocused = false
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
            const subSysSelect1 = systemContainer.querySelector('.sub-sys-select')
            subSysSelect1.focus()
        } else {
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
        subGroupLinksFocused = false
        subGroupItemsFocused = false
    });
})
groupItemsContainers.forEach(el => {
    el.addEventListener('focus', e  => {
        sysSelectFocus =false
        subSysSelectFocus =false
        groupItemsFocused = true 
        subGroupLinksFocused = false
        subGroupItemsFocused = false
    });
})
subGroupLinks.forEach(el =>{
    el.addEventListener('focus', e => { 
        sysSelectFocus = false
        subSysSelectFocus = false
        groupItemsFocused= true
        subGroupLinksFocused = true
        subGroupItemsFocused = false
    });
})
subGroupItemsContainers.forEach(el => {
    el.addEventListener('focus', e  => {
        sysSelectFocus =false
        subSysSelectFocus =false
        groupItemsFocused = false
        subGroupLinksFocused = false
        subGroupItemsFocused = true 
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
let letterSubGroupClicked = false
let letterSubGroupItemClicked = false
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
    const pressedKey = e.key.toLowerCase(); // Convert the pressed key to lowercase for case-insensitivity    
    // // Find the index of the first element starting with the pressed key
    const newIndex = currentLetterArray.findIndex(el => el.id.toLowerCase().startsWith(pressedKey));
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
function getSubGroup(parent){
    if(parent.classList.contains('sub-group')){
        return parent
    } else if (parent.parentElement){
        return getSubGroup(parent.parentElement)
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




addEventListener('keydown' , e => {
    let letter = e.key.toLowerCase()
    shiftM.unshift(letter)
    
    
    
    if(sysSelectFocus || subSysSelectFocus){
        getIdElements(e)        
    }    
    if(groupItemsFocused){
        let group = getGroup(e.target.parentElement)
        let groupLink = group.querySelector('h4 > a')
        let groupItems = group.querySelectorAll('.group-items-container > ul > li > a')
        groupItems.forEach(el =>{
            if(letter == el.innerText[0].toLowerCase()){
                el.focus()
            }
        })
        if(letter == groupLink.id[0] && letterGroupClicked){
            groupLink.focus()
            letterGroupClicked = false
        } else {

            letterGroupClicked = true
        }
    }
    if(subGroupLinksFocused){
        let group = getGroup(e.target.parentElement)
        let subGroupLinks = group.querySelectorAll('.sub-group > h5 > a')
        subGroupLinks.forEach(subGroupLink =>{
            if(letter == subGroupLink.innerText[0].toLowerCase()){
                subGroupLink.focus()
                letterSubGroupClicked = false
            } else {
                letterSubGroupClicked = true
            }
        })
    }
    if(subGroupItemsFocused){
        let group = getGroup(e.target.parentElement)
        let groupLink = group.querySelector('h4 a')
        if(letter == groupLink.id[0]){
            groupLink.focus()
        }
        let groupItemsContainer = getGroupItemsContainer(e.target.parentElement)
        if(groupItemsContainer){

            let groupItems = groupItemsContainer.querySelectorAll('ul > li > a')
            groupItems.forEach(el => {
                if(letter == el.innerText[1]){
                    el.focus()
                }
            })
        }
        let subGroup = getSubGroup(e.target.parentElement)
        let subGroupLink = subGroup.querySelector('h5 > a')
        if(letter == subGroupLink.innerText[0].toLowerCase()){
            subGroupLink.focus()
        }


    }
    if(shiftM.length > 2){
        shiftM.pop()
    }
    if(shiftM[0] === 'm' && shiftM[1] == 'shift'){
        myMris.focus()
    }    
})