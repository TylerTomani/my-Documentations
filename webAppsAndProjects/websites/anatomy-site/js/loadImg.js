const aImages = document.querySelectorAll('a')
const img = document.querySelector('.img-container > img')
aImages.forEach(a => {
    a.addEventListener('click', e => {
        let href
        if(a.hasAttribute('href')){
            e.preventDefault()
            e.stopPropagation()
            img.src = e.target.href
        } else {
            return img.src = img.src
        }
    })
    // a.addEventListener('focus', e => {
    //     let href
    //     if(a.hasAttribute('href')){
    //         e.preventDefault()
    //         e.stopPropagation()
    //         img.src = e.target.href
    //     } else {
    //         return null
    //     }
    // })
})
// 