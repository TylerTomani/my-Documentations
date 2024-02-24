(function(){
    const tutorialLink = document.querySelector('#tutorialLink')
    const canvas = document.querySelector('canvas') ? document.querySelector('canvas') : null;
    const khanAcademy = document.getElementById('khanAcademy') ? document.getElementById('khanAcademy') : null;
    const homeLink = document.getElementById('homeLink') ? document.getElementById('homeLink') : document.getElementById('homelink');

addEventListener('keydown',e =>{
    let key = e.key.toLowerCase()
    if(key === 'h'){
        if(homeLink){
            homeLink.focus()
        }
    }
    if(key === 't'){
        if(tutorialLink){
            tutorialLink.focus()
        }
    }
    if(key == 'k'){
        khanAcademy.focus()
    }
    if(canvas){
        if(key == 'c'){
            canvas.focus()
        }
    }
})
}())