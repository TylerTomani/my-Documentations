const unitDropLinks = document.querySelectorAll(".unit-title-link")

function hideUnitSections(){
    unitDropLinks.forEach(link => {

        let unitSection = link.nextElementSibling;
        
        if(!unitSection.classList.contains("hide")){
            unitSection.classList.add('hide')
        } 
    })
}
hideUnitSections()
unitDropLinks.forEach(link => {    
    link.addEventListener("click", e => {
        let unitSection = link.nextElementSibling;
         if(unitSection.classList.contains('show')){
            unitSection.classList.remove('show')
            unitSection.classList.add('hide')    
        } else if(unitSection.classList.contains("hide")){
            hideUnitSections()
            unitSection.classList.remove('hide')
        } else {
            unitSection.classList.add('hide')

        }

        console.log(unitSection)
    })
})