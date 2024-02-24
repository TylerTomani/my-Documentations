const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.style.border = '2px solid blue'
canvas.width = innerWidth
canvas.height = innerHeight * .8

const scale = .04
const gravity = .5
const yJumpVelocity = 25
let backgroundSpeed = 5
class Player{
    constructor(){
        this.position = {
            x: 200,
            y: 200
        }
        this.velocity = {
            x: 5,
            y: 0
        }
        this.width = canvas.width * scale,
        this.height = canvas.width * scale
    }
    draw(){
        c.fillStyle = 'blue'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.draw()        
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }
}
class Platform{
    constructor({x,y}){
        this.position = {
            x: canvas.width * x,
            y: canvas.height * y
        } 
        this.width = canvas.width * scale * 5
        this.height = canvas.height * scale  
    }
    draw(){
        c.fillStyle = 'olive'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
const player = new Player()
const keys = {
    a: {
        pressed: false
    },
    w: {
        pressed: false
    },
    d: {
        pressed: false
    },
    s: {
        pressed: false
    }
}
const platforms = [new Platform({x:.2,y:.6}),
                    new Platform({x:.5,y:.2}), 
                    new Platform({x:1.04,y:.4}) 
                ]
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    platforms.forEach(platform => {
        platform.draw()
    })
    player.update()
    // player / background movement
    if(keys.d.pressed && player.position.x < canvas.width * .45){
        player.position.x += player.velocity.x 
    } else if(keys.a.pressed && player.position.x > player.width){
        player.position.x -= player.velocity.x  
    } else {
        if(keys.d.pressed){
            platforms.forEach(platform => {
                platform.position.x -= backgroundSpeed
            })
        } else if (keys.a.pressed){
            platforms.forEach(platform => {
                platform.position.x += backgroundSpeed
            })
        }
    }

    // Platform Collision
    platforms.forEach(platform => {
        if(player.position.y + player.height <= platform.position.y &&
            // I don't under stand this part of this conidition ///////////////////////
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            // ////////////////////////////////////////////////////////////////////////
            player.position.x + player.width >= platform.position.x &&
            player.position.x  <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    })
}
animate()

addEventListener('keydown', e => {
    let letter = e.key.toLowerCase()
    switch(letter){
        case 'a':
            keys.a.pressed = true
            console.log('left')
            break
        case 'w':
            keys.w.pressed = true
            player.velocity.y -= yJumpVelocity 
            
            console.log('up')
            break
        case 'd':
            keys.d.pressed = true
            console.log('right')
            break;
        case 's':
            keys.s.pressed = true
            player.velocity.y += yJumpVelocity 
            console.log('down')
            break;
        default:
            break
     }
});
addEventListener('keyup', e => {
    let letter = e.key.toLowerCase()
    switch(letter){
        case 'a':
            keys.a.pressed = false
            break
        case 'w':
            keys.w.pressed = false
            player.velocity.y = 0
            break
        case 'd':
            keys.d.pressed = false
            break;
        case 's':
            keys.s.pressed = false
            player.velocity.y = 0   
            break;
        default:
            break
     }
});