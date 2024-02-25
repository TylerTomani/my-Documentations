const allElements = document.querySelectorAll('body *')
let currentSelection
const textArea = document.querySelector('textarea')
allElements.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
    })
    el.addEventListener('keydown', e => {
        let key = e.keyCode
        if(key === 13){
            currentSelection = e.target.innerText
            console.log(currentSelection.toLowerCase())
            fillTextArea()
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
    if(currentSelection.toLowerCase() == 'c6'){
        textArea.value=`Section of the neck at about the level of the sixth cervical vertebra`
    }
}