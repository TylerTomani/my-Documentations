const groupsContainers = document.querySelectorAll('.groups-container')
const subgroups = document.querySelectorAll('.sub-group')
const subSystemsH3As = document.querySelectorAll('.sub-system-container > h3 > a')
const groupH4As = document.querySelectorAll('.group > h4 > a')
const subGroupH5As = document.querySelectorAll('.sub-group > h5 >a')

const bones = document.querySelectorAll('.bones')
const subGroupBones = document.querySelectorAll('.sub-group > .bones')
function hideGroupsContainers(){
    groupsContainers.forEach(groupsContainer => {
        if(!groupsContainer.classList.contains('show')){
            groupsContainer.classList.add('hide')
        }
    })
    subgroups.forEach(subgroup => {
        if(!subgroup.classList.contains('show')){
            subgroup.classList.add('hide')
        }
    })
}

hideGroupsContainers()
bones.forEach(bone => {
    bone.classList.add('hide')
})
subGroupBones.forEach(subGroupBone => {
    subGroupBone.classList.add('hide')
})


function hideSubGroupBones(){
    subGroupBones.forEach(bone => {
        bone.classList.add('hide')
    })
}
hideSubGroupBones()
// sub-system-container > h3 > a
// I don't know if i need "keydown"
subSystemsH3As.forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault()
        toggleGroupsContainer(e)
    })
    a.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            // toggleGroupsContainer(e)
        }
    })
})

function toggleGroupsContainer(e){
    const parent = getSubSystemContainer(e.target)
    const groupsContainer = parent.querySelector('.groups-container')
    if(groupsContainer.classList.contains('hide')){
        groupsContainer.classList.remove('hide')
    } else {
        groupsContainer.classList.add('hide')
    }
}

function getSubSystemContainer(e){
    const parent = e
    if(parent.classList.contains("sub-system-container")){
        return parent
    } else if (parent.parentElement){
        return getSubSystemContainer(parent.parentElement)
    } else {
        return null
    }
}

// group > h4 > a
groupH4As.forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault()
        
        toggleSubGroup(e)
    })
})
function toggleSubGroup(e){
    // const parent = getGroup(e.target)
    const parent = e.target.parentElement.parentElement
    const subgroups = parent.querySelectorAll('.sub-group')
    const bones = parent.querySelectorAll('.bones')
    if(parent.classList.contains('group')){
        bones.forEach(bone => {
            if(bone.classList.contains('hide')){
                hideSubGroupBones()
                bone.classList.remove('hide')
            } else {
                bone.classList.add('hide')
            }
        })
    } else {
        console.log('no')
    }
    if(subgroups){
        subgroups.forEach(subgroup => {
            if(subgroup.classList.contains('hide')){
                hideSubGroupBones()
                subgroup.classList.remove('hide')
            } else {
                subgroup.classList.add('hide')
            }
        })
           
    }
    

    
}

function getGroup(e){
    const parent = e
    if(parent.classList.contains("group")){
        return parent
    } else if (parent.parentElement){
        return getGroup(parent.parentElement)
    } else {
        return null
    }
}
// sub-groups > h5 > a
subGroupH5As.forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault()
        toggleSubGroupBones(e)
    })
})

function toggleSubGroupBones(e){
    const parent = e.target.parentElement.parentElement
    const bones = parent.querySelectorAll('.bones')
    bones.forEach(bone => {
        if(bone.classList.contains('hide')){
            bone.classList.remove('hide')
        } else {
            bone.classList.add('hide')
        }
    })
}

