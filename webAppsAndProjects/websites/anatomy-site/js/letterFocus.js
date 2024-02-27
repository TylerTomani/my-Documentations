export const myMris = document.getElementById('myMris')
const allEls = document.querySelectorAll('.anatomy-container *')

const allElsArray = []
let currentLetterArray = []
let currentElement
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
        case 'veinsArteries':
            return 'veinsArteries'
        default:
            console.log('no system clicked')
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
    if(anatomyContainer){
        
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
    }
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



let currentSelection
let toggled = false;
let shiftM = []
const noteImg = document.querySelector('.note-img')
const textArea = document.querySelector('textarea')
addEventListener('keydown' , e => {
    let letter = e.key.toLowerCase()
    shiftM.unshift(letter)
    currentSelection = e.target.innerText
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
allEls.forEach(el =>{
    el.addEventListener('click', e => {
        e.preventDefault()
        currentSelection = e.target.innerText
        console.log(currentSelection)
        fillTextArea()
    });
})



function fillTextArea(){
    if(currentSelection.toLowerCase() == 'cervical'){
        textArea.value = `At C1, base of the nose and the hard palate
At C2, the teeth of a closed mouth
At C3, the mandible and hyoid bone
At C4, the common carotid artery bifurcates.
From C4–5, the thyroid cartilage[10]
From C6–7, the cricoid cartilage[10]
At C6, the oesophagus becomes continuous with the laryngopharynx and also where the larynx becomes continuous with the trachea. It is also the level where the carotid pulse can be palpated against the transverse process of the C6 vertebrae.`
    }
    if(currentSelection.toLowerCase() == 'c2'){
        textArea.value=`c2-c3,I have 'Minor facet anthropathy' at c2-c3`
        noteImg.src = 'https://spineconnection.org/wp-content/uploads/2018/06/Facet-Arthropathy-1.jpeg'
        if(!toggled){
            toggled = true
            return
        } else {
            // noteImg.src = 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/308401459_5553648821398451_7312135887235920203_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Mwwwqb9S98QAX_1COoe&_nc_ht=scontent-ord5-2.xx&oh=00_AfAw1zvbFxzstEEQp2Rs1QEOjPV0Ckj-eZ4j2hxBj3vUOQ&oe=65E11196'
            toggled = false
            return
        }
        // return
        console.log(toggled)
    }
    if(currentSelection.toLowerCase() == 'c3'){
        textArea.value=`c3-c4,Large disc osteophyte complex eccentric to the left partially effaces the ventral subarachnoid space and minimally impinges on the left ventral cord surface causing slight flattening. Tiny central annular tear without focal soft disc protrusion/herniation. No central or lateral recess stenosis.  Uncovertebral facet arthropathy results in mild foraminal narrowing on the left.`
    }
    if(currentSelection.toLowerCase() == 'c4'){
        textArea.value=`C4-C5: Mild disc osteophyte complex and tiny central annular tear without focal soft disc protrusion/herniation. No cord impingement.  No central or lateral recess stenosis.  No foraminal narrowing.`
    }
    if(currentSelection.toLowerCase() == 'c5'){
        textArea.value=`C5-C6: Moderate disc osteophyte complex eccentric to the left partially effaces the ventral subarachnoid space without cord impingement. No focal soft disc protrusion/herniation. Mild central and moderate left lateral recess stenosis. Uncovertebral and facet arthropathy results in severe left foraminal narrowing.`
    }
    if(currentSelection.toLowerCase() == 'c6'){
        textArea.value=`Moderate disc osteophyte complex eccentric to the right without cord impingement. No focal soft disc protrusion/herniation. Mild central and right lateral recess stenosis. Uncovertebral and facet arthropathy results in mild right foraminal narrowing.`
    }
}