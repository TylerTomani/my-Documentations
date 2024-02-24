const navUlLiAs = document.querySelectorAll('nav > ul > li > a')

const topics = document.querySelectorAll('.topic')


topics.forEach(topic => {
    topic.addEventListener('click', e => {
        let a = topic.querySelector('a')
        open(a.href)
    })
    topic.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            let a = topic.querySelector('a')
            open(a.href,'_self')
            
        }
    })
})
navUlLiAs.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        console.log(e.target)
        open(e.target.href,'_self')
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            open(e.target.href,'_self')
            
        }
    })
})