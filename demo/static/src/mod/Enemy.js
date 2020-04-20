import status from "../Status.js"
import boomImgList from "./Boom.js"
export default class Enemy{
    constructor(ctx){
        this.ctx = ctx
        this.rect = {
            x: Math.random() * (status.size.w - 60),
            y: -40,
            w: 60,
            h: 40
        }
	this.boomingCount = 0
	this.booming = false
        this.dead = false
        this.lives = 3
        this.vy = Math.random() * 3 + 3
        this.init()
    }
    init(){
        this.img = new Image()
        this.img.src = "static/images/enemy.png"
    }
    render(){
        this.ctx.drawImage(this.img, ...this.rect)

    }
    update(){
        this.rect.y += this.vy
        if(this.rect.y > status.size.h + this.rect.h){
            this.kill()
        }
	if(this.booming && this.boomingCount < boomImgList.length){
	    this.img = boomImgList[this.boomingCount++]
	}
	if(this.boomingCount === boomImgList.length){
	    this.dead = true
	}
    }
    kill(count = 1){
        this.lives -= count
        this.lives --
        if(this.lives <= 0){
	    this.booming = true

	    this.playDeath()
//            this.dead = true
        }
    }
    playDeath(){

    }

}
