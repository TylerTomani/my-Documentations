const homeLink = document.getElementById('homeLink')
const header = document.querySelector('header')
const dropTopics = document.querySelectorAll('.dropTopic')
const resourcesContainers = document.querySelectorAll('.resources-container')
const resourceslist = document.querySelectorAll('.resources-list')
const resources = document.querySelectorAll('.resource')
let topicFocus = true;
let resourceFocus = true;
let clickedResource = false
const iframe = document.querySelector('iframe')
const youtubeVideo = document.getElementById('youtubeVideo')
const noteSection = document.getElementById('noteSection')
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
    el.addEventListener('keydown', e  => {
        let key = e.keyCode
        if(13 === key){
            clickedResource = !clickedResource
            // clickedResource = true
            noteSectionChange(e)
            if(clickedResource){
                e.stopPropagation()
                e.preventDefault()
                //  seekVideo()
            }
        }
    });
})
function seekVideo(){
    // youtubeVideo.src
}
 
addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    if(letter == 'h'){
        homeLink.focus()
    }
    if(letter == 'i'){
        if(iframe){
            iframe.focus()
        }   
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
        let id = dropTopic.id
        if(letter == id[0].toLowerCase(0)){
            dropTopic.focus()
        }
    }
    
});

function noteSectionChange(e){
    const id = e.target.id    
    console.log(id)
    switch (id){
        case 'googleBardGemini':
            noteSection.innerHTML = ''
            let h4 = document.createElement('h4')
            h4.innerText = 'Google Bard (now Gemini)'
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            p1.innerText = 'If you are 18 or older, or under 18 and turn Gemini Apps Activity on, then by default Google stores your Gemini Apps activityOpens in a new window with your Google Account for up to 18 months, which you can change to 3 or 36 months in you'
            p2.innerText = 'To help with quality and improve our products (such as generative machine-learning models that power Gemini Apps), human reviewers read, annotate, and process your Gemini Apps conversations. '
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            noteSection.appendChild(p2)

    }
}