const homeLink = document.getElementById('homeLink')
const header = document.querySelector('header')
const dropTopics = document.querySelectorAll('.dropTopic')
const resourcesContainers = document.querySelectorAll('.resources-container')
const resourceslist = document.querySelectorAll('.resources-list')
const resources = document.querySelectorAll('.resource')
let topicFocus = true;
let resourceFocus = true;
function hideResourcesContainers(){
    resourcesContainers.forEach(el => {
        if(!el.classList.contains('hide') && !el.classList.contains('show')){
            el.classList.add('hide')
        }
    })
}
hideResourcesContainers()

dropTopics.forEach(el => {
    el.addEventListener('focus', e  => {
        topicFocus = true
        resourceFocus = false
    });
    el.addEventListener('click', e => {
        e.preventDefault()
        const topicContainer = getTopicContainer(e.target.parentElement)
        const resourcesContainers = topicContainer.querySelector('.resources-container')
        toggleHideContainer(resourcesContainers)

    });
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){   
            const topicContainer = getTopicContainer(e.target.parentElement)
            const resourcesContainers = topicContainer.querySelector('.resources-container')
            toggleHideContainer(resourcesContainers)
        }
    });
})
function toggleHideContainer(container){
    if(!container.classList.contains('hide')){
        container.classList.add('hide')
    } else [
        container.classList.remove('hide')

    ]
    if(container.classList.contains('show')){
        container.classList.remove('show')
        container.classList.add('hide')
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
    if(topicFocus){
        dropTopics.forEach(el => {
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
        const topicContainer = getTopicContainer(e.target.parentElement)
        const dropTopic = topicContainer.querySelector('.dropTopic')
        console.log(dropTopic)
        let id = dropTopic.id
        if(letter == id[0].toLowerCase(0)){
            console.log('yes')
            dropTopic.focus()
        }
    }
    
});