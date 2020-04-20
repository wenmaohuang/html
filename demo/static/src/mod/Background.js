import status from "../Status.js"
import "../lib/Proto.js"
export default class Background{
    constructor(ctx){
        this.ctx = ctx
        this.y = 100
        this.vy = 2
        this.rect1 = {
            x: 0,
            y: 0,
            ...status.size
        }
        this.rect2 = {
            x: 0,
            y: this.rect1.y - status.size.h,
            ...status.size
        }
        this.init()
    }
    init(){
        this.img = new Image()
        this.img.src = "static/images/bg.jpg"
    }
    render(){
        this.ctx.beginPath()
        this.ctx.drawImage(this.img,...this.rect1)
        this.ctx.drawImage(this.img,...this.rect2)
    }
    update(){
        this.rect1.y += this.vy
        this.rect2.y = this.rect1.y - status.size.h
        if(this.rect1.y >= status.size.h){
            this.rect1.y = 0
        }
    }
    reset(){
        this.rect1.y = 0
    }
}