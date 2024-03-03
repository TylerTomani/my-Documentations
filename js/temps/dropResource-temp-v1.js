// const homeLink = document.getElementById('homeLink')
const header = document.querySelector('header')
const dropResources = document.querySelectorAll('.dropResource')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')
const resourceslist = document.querySelectorAll('.resources-list')
const resources = document.querySelectorAll('.resource')
let topicFocus = true;
let resourceFocus = true;
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
        topicFocus = true
        resourceFocus = false
    });
    el.addEventListener('click', e => {
        e.preventDefault()
        
        const topicContainer = getTopicContainer(e.target.parentElement)
        const subResourcesContainers = topicContainer.querySelector('.subresources-container')
        toggleHideContainer(subResourcesContainers)
        
    });
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){   
            const topicContainer = getTopicContainer(e.target.parentElement)
            const subResourcesContainers = topicContainer.querySelector('.resources-container')
            toggleHideContainer(subResourcesContainers)
        }
    });
})
function toggleHideContainer(container){
    
    if(!container.classList.contains('hide')){
        container.classList.add('hide')
        topicFocus = true
        resourceFocus = false
    } else {
        console.log('kdjf')
        container.classList.remove('hide')
        topicFocus = false
        resourceFocus = true
    }
    if(container.classList.contains('show')){
        container.classList.remove('show')
        container.classList.add('hide')
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
    if(topicFocus){
        dropResources.forEach(el => {
        let id = el.getAttribute('id')
        if(id){
            if(letter == id[0]){
                el.focus()
            }
        }
        if(3 == letter ){
            const threeDanimation = document.getElementById('threeDanimation')
            threeDanimation.focus()
        }
        if('t' == letter ){
            const textToImage = document.getElementById('textToImage')
            textToImage.focus()
        }
    })
    }
    
    if(resourceFocus){
        resources.forEach(el => {
            if(letter == el.innerText[0].toLowerCase()){
                el.focus()
            }
        })
        const getResourceContainer = getResourceContainer(e.target.parentElement)
        const dropResource = topicContainer.querySelector('.dropResource')
        let id = dropResource.id
        if(letter == id[0].toLowerCase(0)){
            dropResource.focus()
        }
    }
    
});