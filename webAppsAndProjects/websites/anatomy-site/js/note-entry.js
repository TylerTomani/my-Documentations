
let shiftM = []
const allElements = document.querySelectorAll('body *')
let currentSelection
const textArea = document.querySelector('textarea')
const noteImg = document.querySelector('.note-img')
allElements.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        currentSelection = e.target.innerText
            fillTextArea()
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            currentSelection = e.target.innerText
            fillTextArea()
            console.log(currentSelection.toLowerCase())
        }
        
    });
})



function fillTextArea(){
    if(currentSelection.toLowerCase() == 'cervical'){
        textArea.value = `At C1, base of the nose and the hard palate
At C2, the teeth of a closed mouth
At C3, the mandible and hyoid bone
At C4, the common carotid artery bifurcates.
From C4–5, the thyroid cartilage[10]
From C6–7, the cricoid cartilage[10]
At C6, the oesophagus becomes continuous with the laryngopharynx and also where the larynx becomes continuous with the trachea. It is also the level where the carotid pulse can be palpated against the transverse process of the C6 vertebrae.`
    }
    if(currentSelection.toLowerCase() == 'c2'){
        textArea.value=`I have 'Minor facet anthropathy' at c2-c3`
        noteImg.src = 'https://spineconnection.org/wp-content/uploads/2018/06/Facet-Arthropathy-1.jpeg'
        return
    }
    if(currentSelection.toLowerCase() == 'c6'){
        textArea.value=`Section of the neck at about the level of the sixth cervical vertebra`
    }
}

function addImg(){
    
}