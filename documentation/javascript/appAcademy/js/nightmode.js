const nightBtn = document.querySelector("#night-mode")
const body = document.querySelector("body")



nightBtn.addEventListener('click', e=>{
    if(!body.classList.contains("night-mode")){
        body.classList.add("night-mode")
    } else {
        body.classList.remove("night-mode")
    }
})