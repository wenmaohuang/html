import status from "../Status.js"
import playerConfig from "./playerConfig.js"
export default class Player{
    constructor(ctx){
        this.ctx = ctx
        this.draged = false
        this.rect = {
            x: status.size.w / 2 - 98,
            y: status.size.h - 130,
            w: 186,
            h: 130
        }
        this.vip = 2
        this.init()
    }
    init(){
        this.img = new Image()
        this.img.src = "static/images/hero.png"
        // console.log(this.img.src);
    }
    reset(){
        this.rect = {
            x: status.size.w / 2 - 98,
            y: status.size.h - 130,
            w: 186,
            h: 130
        }
        // console.log("reset")
    }
    render(){
        this.ctx.drawImage(this.img,...this.rect)
        // console.log("render")
    }
    update(){
        if(this.rect.x < 0){
            this.rect.x = 98
        }
        if(this.rect.x > status.size.w - this.rect.w){
            this.rect.x = status.size.w - this.rect.w - 98
        }
        if(this.rect.y < 0){
            this.rect.y = 0
        }
        if(this.rect.y > status.size.h - this.rect.h){
            this.rect.y  = status.size.h - this.rect.h
        }
    }

    initEvent(dom){

        playerConfig.forEach(item => {
            item.handleList.forEach(fn => {
                dom.addEventListener(item.type, fn.onceBind(this))
            })
        })

    }
    removeEvent(dom){
        playerConfig.forEach(item => {
            item.handleList.forEach(fn => {
                dom.removeEventListener(item.type, fn.onceBind(this))
            })
        })
    }
}