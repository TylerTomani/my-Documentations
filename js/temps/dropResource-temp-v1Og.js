const homeLink = document.getElementById('homeLink')
const header = document.querySelector('header')
const dropTopics = document.querySelectorAll('.dropTopic')
const resourcesContainers = document.querySelectorAll('.resources-container')
const resourceslist = document.querySelectorAll('.resources-list')
const resources = document.querySelectorAll('.resource')
let topicFocus = true;
let resourceFocus = false;
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
    el.addEventListener('focusout', e => {
        // topicFocus = false
        console.log('focusout')
        
    });
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
        })
    }
    if(resourceFocus){
        // resources.forEach(el => {
        //     let id = el.getAttribute('id')
        //     if(letter == id[0]){
        //         el.focus()
        //     }
        // })     
        
    }
    // if(topicFocus){
    //     dropTopics.forEach(el => {
    //         let id = el.getAttribute('id')
    //         if(id){

    //             if(letter == id[0]){
    //                 el.focus()
    //             }
    //         }
    //     })
    //     dropResources.forEach(el => {
    //         let id = el.getAttribute('id')
    //         if(id){

    //             if(letter == id[0]){
    //                 el.focus()
    //             }
    //         }
    //     })
    // } else {
    //     let resourceContainer = getResourceContainer(e.target.parentElement) ? getResourceContainer(e.target.parentElement) : getSubResourcesContainer(e.target.parentElement)
        
    //     if(resourceContainer){
    //         let resources = resourceContainer.querySelectorAll('.sub-resources-container > ul > li > .resource')
    //         if(resources){
    //             resources.forEach(el => {
    //                 let id = el.getAttribute('id')
    //                 if(letter == id[0]){
    //                     el.focus()
    //                 }
    //             })
    //         }
    //     }
    //     let topicContainer = getTopicContainer(e.target.parentElement)
    //     if(topicContainer){
    //         let dropTopic = topicContainer.querySelector('.dropTopic')
    //         let topicId = dropTopic.getAttribute('id')
    //         if(letter == topicId[0]){
    //             dropTopic.focus()
    //         }     
    //     }
        
    // }
});