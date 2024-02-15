const homeLink = document.getElementById('homeLink')
const header = document.querySelector('header')
const dropTopics = document.querySelectorAll('.dropTopic')
const dropResources = document.querySelectorAll('.dropResource')
const subResourcesContainers = document.querySelectorAll('.sub-resources-container')
const resourceContainers = document.querySelectorAll('.resource-container')
const resources = document.querySelectorAll('.resource')
let topicFocus = true;
let resourceFocus = false



header.addEventListener('focusin', () => {    
    topicFocus = true
})
function hideSubResourcesContainer(){
    subResourcesContainers.forEach(el => {
    if(!el.classList.contains('hide') && !el.classList.contains('show')){
        el.classList.add('hide')
    }
    if(el.classList.contains('show')){
        resourceFocus = true
    }
    })
}
function hideResourceContainers(){
    resourceContainers.forEach(el => {
        if(!el.classList.contains('hide')){
            el.classList.add('hide')
        }
    })
}
hideSubResourcesContainer()
hideResourceContainers()

dropResources.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        const resourceContainer = getResourceContainer(e.target.parentElement)
        let subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')
        toggleSubResourcesContainer(subResourcesContainer)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            const resourceContainer = getResourceContainer(e.target.parentElement)
            let subResourcesContainer = resourceContainer.querySelector('.sub-resources-container')
            toggleSubResourcesContainer(subResourcesContainer)
        }
    })
})

dropTopics.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        const topicContainer = getTopicContainer(e.target.parentElement)
        let resourceContainer = topicContainer.querySelector('.resource-container') ?
                                topicContainer.querySelector('.resource-container') :
                                topicContainer.querySelector('.sub-resources-container')
        toggleTopic(resourceContainer)
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        open(e.target.href,'_self')
        if(key === 13){
            const topicContainer = getTopicContainer(e.target.parentElement)
            let resourceContainer = topicContainer.querySelector('.resource-container') ?
                                    topicContainer.querySelector('.resource-container') :
                                    topicContainer.querySelector('.sub-resources-container')
            toggleTopic(resourceContainer)
        }
    })
    el.addEventListener('focus', e  => {
        topicFocus = true
        // resourceFocus = false
    });
})

function toggleSubResourcesContainer(el){
    
    if(el.classList.contains('hide')){
        hideSubResourcesContainer()
        el.classList.remove('hide')
    } else {
        el.classList.add('hide')
    }
}
function toggleTopic(el){
    if(el){

        if(el.classList.contains('hide')){
            hideResourceContainers()
            hideSubResourcesContainer()
            el.classList.remove('hide')
        } else {
            el.classList.add('hide')
        }
    }
}

function getTopicContainer(parent){
    if(parent.classList.contains('topic-container')){
        return parent
    } else if (parent.parentElement){
        return getTopicContainer(parent.parentElement)
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
function getSubResourcesContainer(parent){
    if(parent.classList.contains('sub-resources-container')){
        return parent
    } else if (parent.parentElement){
        return getSubResourcesContainer(parent.parentElement)
    } else {
        return null
    }
}

resources.forEach(el => {
    el.addEventListener('focus', e => {
        topicFocus = false
        let img = e.target.querySelector('img')
        animateResource(img)
    });
    el.addEventListener('focusout', e => {
        topicFocus = false
        let img = e.target.querySelector('img')
        animateResource(img)
    });
})
function animateResource(el){
    
    if(!el.classList.contains('animate')){
        el.classList.add('animate')
    } else {
        el.classList.remove('animate')
    }
}
dropResources.forEach(el => {
    el.addEventListener('focus', e => {
        topicFocus = false
    });
})

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'h'){
        homeLink.focus()
    }
    if(resourceFocus){
        resources.forEach(el => {
            let id = el.getAttribute('id')
            if(letter == id[0]){
                el.focus()
            }
        })     
        
    }
    if(topicFocus){
        dropTopics.forEach(el => {
            let id = el.getAttribute('id')
            if(id){

                if(letter == id[0]){
                    el.focus()
                }
            }
        })
        dropResources.forEach(el => {
            let id = el.getAttribute('id')
            if(id){

                if(letter == id[0]){
                    el.focus()
                }
            }
        })
    } else {
        let resourceContainer = getResourceContainer(e.target.parentElement) ? getResourceContainer(e.target.parentElement) : getSubResourcesContainer(e.target.parentElement)
        
        if(resourceContainer){
            let resources = resourceContainer.querySelectorAll('.sub-resources-container > ul > li > .resource')
            if(resources){
                resources.forEach(el => {
                    let id = el.getAttribute('id')
                    if(letter == id[0]){
                        el.focus()
                    }
                })
            }
        }
        dropResources.forEach(el => {
            let id = el.getAttribute('id')
            if(letter == id[0]){
                el.focus()
            }
        })

        let topicContainer = getTopicContainer(e.target.parentElement)
        if(topicContainer){
            let dropTopic = topicContainer.querySelector('.dropTopic')
            let topicId = dropTopic.getAttribute('id')
            if(letter == topicId[0]){
                dropTopic.focus()
            }     
        }
        
    }
});