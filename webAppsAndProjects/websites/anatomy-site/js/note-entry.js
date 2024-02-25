
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
        if(e.target.innerText == currentElement){
            noteImg.focus()
            console.log(noteImg)
        }        
    });
})

let toggled = false;

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
        textArea.value=`c2-c3,I have 'Minor facet anthropathy' at c2-c3`
        noteImg.src = 'https://spineconnection.org/wp-content/uploads/2018/06/Facet-Arthropathy-1.jpeg'
        if(!toggled){
            toggled = true
            return
        } else {
            // noteImg.src = 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/308401459_5553648821398451_7312135887235920203_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Mwwwqb9S98QAX_1COoe&_nc_ht=scontent-ord5-2.xx&oh=00_AfAw1zvbFxzstEEQp2Rs1QEOjPV0Ckj-eZ4j2hxBj3vUOQ&oe=65E11196'
            toggled = false
            return
        }
        // return
        console.log(toggled)
    }
    if(currentSelection.toLowerCase() == 'c3'){
        textArea.value=`c3-c4,Large disc osteophyte complex eccentric to the left partially effaces the ventral subarachnoid space and minimally impinges on the left ventral cord surface causing slight flattening. Tiny central annular tear without focal soft disc protrusion/herniation. No central or lateral recess stenosis.  Uncovertebral facet arthropathy results in mild foraminal narrowing on the left.`
    }
    if(currentSelection.toLowerCase() == 'c4'){
        textArea.value=`C4-C5: Mild disc osteophyte complex and tiny central annular tear without focal soft disc protrusion/herniation. No cord impingement.  No central or lateral recess stenosis.  No foraminal narrowing.`
    }
    if(currentSelection.toLowerCase() == 'c5'){
        textArea.value=`C5-C6: Moderate disc osteophyte complex eccentric to the left partially effaces the ventral subarachnoid space without cord impingement. No focal soft disc protrusion/herniation. Mild central and moderate left lateral recess stenosis. Uncovertebral and facet arthropathy results in severe left foraminal narrowing.`
    }
    if(currentSelection.toLowerCase() == 'c6'){
        textArea.value=`Moderate disc osteophyte complex eccentric to the right without cord impingement. No focal soft disc protrusion/herniation. Mild central and right lateral recess stenosis. Uncovertebral and facet arthropathy results in mild right foraminal narrowing.`
    }
}

function addImg(){
    
}