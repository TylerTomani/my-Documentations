(function(){
    const homelink = document.querySelector('#homelink')
    const tutorialLink = document.querySelector('#tutorialLink')
    const scriptsContainer = document.querySelector('.scripts-container')
    const canvas = document.querySelector('canvas')

    let cmdShift = []
    addEventListener('keydown', e => {
        let letter = e.key.toLowerCase()
        if(letter == 'c'){
            canvas.focus()
            
        }
        if(letter == 'h'){
            homelink.focus()
            scrollTo(0,0)            
        }
        if(letter == 't'){
            tutorialLink.focus()
            scrollTo(0,0)            
        }
        
    cmdShift.push(letter) 
    if(cmdShift.length > 2){
            cmdShift.shift()
    }
    console.log(cmdShift)
    if(cmdShift[0] == 'shift' && cmdShift[1] == 's'){
        scriptsContainer.focus()
    }
    if(cmdShift[0] == 'shift' && cmdShift[1] == 'c'){
        changeScriptPosition()
    }

    });

    function changeScriptPosition(){
        const scriptParent = scriptsContainer.parentElement
        console.log(scriptParent)
        // scriptParent.style.position = 'relative'
        const header = scriptsContainer.querySelector('header')
        if(!scriptsContainer.classList.contains('changeScriptPosition')){
            console.log(header)
            header.style.position = 'aboslute'
            header.style.background = 'white'
            scriptsContainer.classList.add('changeScriptPosition')
            console.log('add')
        } else {
            scriptsContainer.classList.remove('changeScriptPosition')
            // header.style.background = black

        }
    }
}())