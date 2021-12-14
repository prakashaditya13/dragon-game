import { updateGround, setupGround } from './ground.js'

const GAME_WORLD_WIDTH = 100
const GAME_WORLD_HEIGHT = 30

const worldArea = document.querySelector("[data-gameWorld]")

setWorldScaleWindow()

window.addEventListener("resize", setWorldScaleWindow)

setupGround()

let lastTime
function update(time){
    if(lastTime == null){
        lastTime = time
        window.requestAnimationFrame(update)
        return  
    }
    let diffDelta = time - lastTime
    updateGround(diffDelta)
    // console.log(time)
    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)

function setWorldScaleWindow(){
    let WorldScale
    if(window.innerWidth / window.innerHeight < GAME_WORLD_WIDTH / GAME_WORLD_HEIGHT){
        WorldScale = window.innerWidth / GAME_WORLD_WIDTH
    }else{
        WorldScale = window.innerHeight / GAME_WORLD_HEIGHT
    }

    worldArea.style.width = `${GAME_WORLD_WIDTH * WorldScale}px`
    worldArea.style.height = `${GAME_WORLD_HEIGHT * WorldScale}px`
}