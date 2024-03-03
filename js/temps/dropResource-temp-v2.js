const homeLink = document.getElementById('homeLink')
const chatBots = document.querySelector('#chatBots')
const claude = document.querySelector('#claude')
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
        noteSectionChange(e)
    });
    el.addEventListener('keydown', e  => {
        topicFocus = false
        resourceFocus = true
        let key = e.keyCode
        if(13 === key){
            e.preventDefault()
            e.stopPropagation()
            clickedResource = !clickedResource
            clickedResource = true
            if(clickedResource){
                open(e.target.href,'_blank')
                console.log(e.target.href)
                //  seekVideo()
                clickedResource = false
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
    if(letter == 'y'){
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
            const textToImage = document.getElementById('textToImage') ? document.getElementById('textToImage') : document.getElementById('textToVideo')
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
        if(topicContainer){

            const dropTopic = topicContainer.querySelector('.dropTopic')
            let id = dropTopic.id
            if(letter == id[0].toLowerCase(0) && dropTopic){
                dropTopic.focus()
            }
        }
    }
    
});

function noteSectionChange(e){
    const id = e.target.id    
    let h4, p1, p2,img;
    console.log(id)
    switch (id){
        case 'googleBardGemini':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            p2 = document.createElement('p')
            h4.innerText = 'Google Bard (now Gemini)'
            p1.innerText = 'If you are 18 or older, or under 18 and turn Gemini Apps Activity on, then by default Google stores your Gemini Apps activityOpens in a new window with your Google Account for up to 18 months, which you can change to 3 or 36 months in you'
            p2.innerText = 'To help with quality and improve our products (such as generative machine-learning models that power Gemini Apps), human reviewers read, annotate, and process your Gemini Apps conversations. '
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            noteSection.appendChild(p2)
            break
        case 'claude':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'Claude'
            p1.innerText = 'Great for Long documentation, send and receives 150,000 words'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            break
        case 'perplexity':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'peplexity'
            p1.innerText = 'Great for searching pages for items, search / domain and  great extension'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            img.src = './images/perplexity.png'
            console.log(img)
            noteSection.appendChild(img)
            break
        case 'leonardoAi':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'leonardoAican be used commercially'
            p1.innerText = 'Really good results but confusing'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            break
        case 'microsoftBingDalle3':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'microsoftBingDalle3'
            p1.innerText = 'Amazing but limited uses/day, amazing, but i think you can still use it the images just get slower'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            break
        case 'playgroundAi':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'playgroundAi be used commercially'
            p1.innerText = '500 images / day'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            break
        case 'upscale':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'upscale'
            p1.innerText = 'improve images quality'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            break
        case 'autodraw':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'autodraw'
            p1.innerText = 'autocorrect for drawing basic images'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            img.src = './images/autodraw.png'
            noteSection.appendChild(img)
            break
        case 'playphrase':
            noteSection.innerHTML = ''
            h4 = document.createElement('h4')
            p1 = document.createElement('p')
            h4.innerText = 'playphrase'
            p1.innerText = 'find scenes where characters say specified text'
            noteSection.appendChild(h4)
            noteSection.appendChild(p1)
            break
    }
}
chatBots.addEventListener('keydown', e  => {
    let letter = e.key.toLowerCase()
    if(letter == 'c'){
        claude.focus()
        
    }
    
});