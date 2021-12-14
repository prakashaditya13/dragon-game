import { incrementCustomProperty, setCustomProperty,  getCustomProperty } from "./updateCustomProperty.js"

const SPEED = 0.05
const gameGround = document.querySelectorAll("[data-ground]")


export function setupGround(){
    setCustomProperty(gameGround[0], "--left", 0)
    setCustomProperty(gameGround[1], "--left", 300)
}

export function updateGround(diffDelta){
    gameGround.forEach(ground => {
        incrementCustomProperty(ground, "--left", diffDelta * SPEED * -1)
        if(getCustomProperty(ground, "--left") <= -300){
            incrementCustomProperty(ground, "--left", 600)
        }
    })
}