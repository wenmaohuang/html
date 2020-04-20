export default class Bullet{
    constructor(ctx){
        this.ctx = ctx
        this.dead = false
        this.rect = {
            x: 0,
            y: 0,
            w: 18,
            h: 27
        }
        this.vy = -5
        this.init()		
    }
    init(){
        this.img = new Image()
        this.img.src = "static/images/bullet.png"
    }
    setPosition(rect){
        this.rect.x = rect.x + (rect.w - this.rect.w)/2
        this.rect.y = rect.y - this.rect.h / 2

    }
    render(){
        this.ctx.drawImage(this.img, ...this.rect)
    }
    update(){
        this.rect.y += this.vy
        if (this.rect.y < - this.rect.h){
            this.kill()
        }
    }
    kill(){
        this.dead = true
    }

}
