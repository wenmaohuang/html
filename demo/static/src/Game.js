import Background from "./mod/Background.js"
import status from "./Status.js"
import "./lib/Proto.js"
import Player from "./mod/Player.js"
class Game{
    constructor(container){
        this.container = container

        this.paused = false
        this.render = this.render.bind(this)
        this.pause = this.pause.bind(this)
        this.continue = this.continue.bind(this)
        this.initCanvas()

        this.restartGame()

    }
    initCanvas(){
        this.canvas = document.createElement("canvas")
        this.canvas.style.display = "block"
        this.canvas.width = this.container.getBoundingClientRect().width,
        this.canvas.height = this.container.getBoundingClientRect().height
        this.ctx = this.canvas.getContext("2d")
        this.container.appendChild(this.canvas)
        this.container.onblur = this.pause
        this.container.onfocus = this.continue
        status.init(this.canvas)
        this.size = {
            w: status.size.w,
            h: status.size.h
        }

    }
    restartGame(){

        this.removeEvent()
        this.initEvent()
        status.reset()
        this.continue()
        this.render()
    }
    render(){
        this.frame = requestAnimationFrame(this.render)
        if(!this.paused){
            this.ctx.clearRect(0,0,...this.size)
            status.update()
            status.render()
        }

    }
    initEvent(){
        status.player.initEvent(this.canvas)
    }
    removeEvent(){
        status.player.removeEvent(this.canvas)
    }
    pause(){
        this.paused = true
        clearInterval(this.fireTimer)

        // console.log(this.frame + 8888) ;
    }
    continue(){
        this.fireTimer = setInterval(status.fire.bind(status), 1000/7)

        this.paused = false
    }
}
export default Game
