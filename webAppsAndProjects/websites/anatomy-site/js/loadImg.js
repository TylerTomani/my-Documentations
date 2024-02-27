const homelink = document.getElementById('homeLink')
const aImages = document.querySelectorAll('a')
const img = document.querySelector('.img-container > img')
aImages.forEach(a => {
    a.addEventListener('click', e => {
        if(a.hasAttribute('href')){
            e.preventDefault()
            e.stopPropagation()
            img.src = e.target.href
        } else {
            return img.src = img.src
        }
    })
    
})
// 

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()

    if(letter == 'h'){
        homelink.focus()
    }
    
});
homelink.addEventListener('click', e => {
    open(e.target.href,'_self')
});