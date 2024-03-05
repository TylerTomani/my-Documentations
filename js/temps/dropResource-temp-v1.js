// const homeLink = document.getElementById('homeLink')
const header = document.querySelector('header')
const dropResources = document.querySelectorAll('.dropResource')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')
const subResources = document.querySelectorAll('.sub-resource')
const resourceslist = document.querySelectorAll('.resources-list')
const resources = document.querySelectorAll('.resource')
let resourceFocus = true;
let subResourceFocus = true;
const noteSection = document.getElementById('noteSection')
const etsyCompetition = document.getElementById('etsyCompetition')
function hideSubResourcesContainers(){
    subResourcesContainers.forEach(el => {
        if(!el.classList.contains('hide') && !el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideSubResourcesContainers()

dropResources.forEach(el => {
    el.addEventListener('focus', e  => {
        resourceFocus = true
        subResourceFocus = false
        
    });
    el.addEventListener('click', e => {
        e.preventDefault()        
        const resourceContainer = getResourceContainer(e.target.parentElement)
        const subResourcesContainers = resourceContainer.querySelector('.subresources-container ')
        toggleHideContainer(subResourcesContainers)
        
    });
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){   
            const resourceContainer = getResourceContainer(e.target.parentElement)
            const subResourcesContainers = resourceContainer.querySelector('.sub-resources-container')
            toggleHideContainer(subResourcesContainers)
        }
    });
})

function toggleHideContainer(container){
    if(container.classList.contains('hide')){
        container.classList.remove('hide')
        resourceFocus = true
    } else {
        container.classList.add('hide')
        resourceFocus = true
    }
    if(container.classList.contains('show')){
        container.classList.remove('show')
        container.classList.add('hide')
    }
}
function getResourcesContainer(parent){
    if(parent.classList.contains('resources-container')){
        return parent
    } else if (parent.parentElement){
        return getResourcesContainer(parent.parentElement)
    } else {
        return null
    }
}
function getResourceContainer(parent){
    if(parent.classList.contains('resource-container')){
        return parent
    } else if (parent.parentElement){
        return getResourceContainer(parent.parentElement)
    } else {
        return null
    }
}
resources.forEach(el => {
    el.addEventListener('focus', e => {
        topicFocus = false
        resourceFocus = true
    });
    ;
})
subResources.forEach(el => {
    el.addEventListener('focusin', e => {
        resourceFocus = false
        subResourceFocus = true
        insertNoteSection(e)
    });
})

function insertNoteSection(e){
    const p1 = document.createElement('p')
    switch (e.target.id){
        case 'mageSpace':
            noteSection.innerHTML = ''
            noteSection.setAttribute('target','_blank')
            noteSection.href = 'https://www.mage.space/membership#:~:text=Can%20I%20use%20images%20for,is%20great%2C%20but%20not%20required.'
            noteSection.style.backgroundImage = "url('./images/mageSpace.png')"
            noteSection.style.backgroundSize = "200%"
            noteSection.style.backgroundRepeat = "no-repeat"
            noteSection.style.backgroundPositionY = "-150px"
            noteSection.style.backgroundPositionX = "-300px"
            p1.innerText = 'Available for commercial use'
            p1.style.color = 'white'
            noteSection.appendChild(p1)
            break
        case 'openAi':
            noteSection.innerHTML = ''
            noteSection.setAttribute('target','_blank')
            noteSection.href = 'https://openart.ai/general_faq#:~:text=Can%20I%20use,purposes%20without%20licensing.'
            noteSection.style.backgroundImage = "url('./images/openAi.png')"
            noteSection.style.backgroundSize = "200%"
            noteSection.style.backgroundRepeat = "no-repeat"
            noteSection.style.backgroundPositionY = "-150px"
            noteSection.style.backgroundPositionX = "-300px"
            p1.innerText = 'Available for commercial use'
            p1.style.color = 'white'
            noteSection.appendChild(p1)
            break
        case 'craiyon':
            noteSection.innerHTML = ''
            noteSection.setAttribute('target','_blank')
            noteSection.href = 'https://www.craiyon.com/terms#:~:text=Subject%20to%20your,the%20Site%2C%20use'
            noteSection.style.backgroundImage = "url('./images/craiyon.png')"
            noteSection.style.backgroundSize = "200%"
            noteSection.style.backgroundRepeat = "no-repeat"
            noteSection.style.backgroundPositionY = "-150px"
            noteSection.style.backgroundPositionX = "-300px"
            p1.innerText = 'Fuzzy legal terms, it seems like you can but they have the right to revoke at any time'
            p1.style.fontSize = '1.8rem'
            p1.style.fontStyle = 'bold'
            p1.style.paddingTop = '1%'
            p1.style.color = 'red'
            noteSection.appendChild(p1)
            break
        case 'leonardoAi':
            noteSection.innerHTML = ''
            noteSection.setAttribute('target','_blank')
            noteSection.href = 'https://leonardo.ai/terms-of-service/#:~:text=Free%20tier%20users%20are%20granted%20a%20worldwide%2C%20non%2Dexclusive%2C%20royalty%2Dfree%20license%20by%20Leonardo.Ai%20to%20access%20the%20assets%20they%20create%20using%20the%20service%20for%20their%20own%20commercial%20use.'
            noteSection.style.backgroundImage = "url('./images/leonardoAi.png')"
            noteSection.style.backgroundSize = "200%"
            noteSection.style.backgroundRepeat = "no-repeat"
            noteSection.style.backgroundPositionY = "-150px"
            noteSection.style.backgroundPositionX = "-300px"
            p1.innerText = 'Says you can'
            p1.style.fontSize = '1.8rem'
            p1.style.fontStyle = 'bold'
            p1.style.paddingTop = '1%'
            p1.style.color = 'red'
            noteSection.appendChild(p1)
            break
        case 'bee':
            etsyCompetition.src = 'images/bee.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'running':
            etsyCompetition.src = 'images/running.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'weather':
            etsyCompetition.src = 'images/weather.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'phoenixArt':
            etsyCompetition.src = 'images/phoenixArt.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'tornadoArt':
            etsyCompetition.src = 'images/tornadoArt.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'flame':
            etsyCompetition.src = 'images/flame.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'nyc':
            etsyCompetition.src = 'images/nyc.png'
            scrollTo(0,innerHeight * .5)
            break
        case 'z':
            etsyCompetition.src = ''
            scrollTo(0,innerHeight * .5)
            break
            
        }

}
noteSection.addEventListener('click', e =>{
})
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'h'){
        homeLink.focus()
    }
    if(letter == 'i'){
        const iframe = document.querySelector('iframe')
        if(iframe){
            iframe.focus()
        }   
    }
    if(resourceFocus){
        dropResources.forEach(el => {
        let id = el.getAttribute('id')
        if(id){
            if(letter == id[0]){
                el.focus()
            }
        }
        if(3 == letter ){
            // const threeDanimation = document.getElementById('threeDanimation')
            // threeDanimation.focus()
        }
        if('t' == letter ){
            // const textToImage = document.getElementById('textToImage')
            // textToImage.focus()
        }
    })
    }
    
    // if(resourceFocus){
    //     resources.forEach(el => {
    //         if(letter == el.innerText[0].toLowerCase()){
    //             el.focus()
    //         }
    //     })
    //     const resourcesContainer = getResourcesContainer(e.target.parentElement)
    //     // const dropResource = resourcesContainer.querySelector('header > .dropResource')
    //     // console.log(resourcesContainer)
    //     // let id = dropResource.id
    //     // if(letter == id[0].toLowerCase(0)){
    //     //     dropResource.focus()
    //     // }
    // }
    
});