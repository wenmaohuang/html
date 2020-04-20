import Background from "./mod/Background.js";
import Player from "./mod/Player.js";
import Bullet from "./mod/Bullet.js"
import Enemy from "./mod/Enemy.js"
import rectCollide from "./tools.js"

class Status{
    constructor(){
        this.size = {
            w: 0,
            h: 0
        }
    }
    init(canvas){

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.size.w = canvas.width
        this.size.h = canvas.height
        this.bullet = new Bullet(this.ctx)
        this.bg = new Background(this.ctx)
        this.player = new Player(this.ctx)
        this.bulletList = []
        this.enemyList = []

    }
        fire(){
        let bullet = new Bullet(this.ctx)
        bullet.setPosition(this.player.rect)
        this.bulletList.push(bullet)
    }

    update() {
        this.bg.update()
        this.player.update()
        this.bulletList.forEach(bullet => {
            bullet.update()
        })
        if(Math.random() < 0.1){


            this.enemyList.push(new Enemy(this.ctx))
        }
        this.enemyList.forEach(enemy => {
            enemy.update()

        })
        this.enemyList = this.enemyList.filter(enemy => !enemy.dead)
        this.bulletList.forEach(bullet => {
            this.enemyList.forEach(enemy => {
                if(rectCollide(bullet.rect,enemy.rect)){
                    bullet.kill()
                    enemy.kill(this.player.vip)
                }
            })
        })

    }

    render(){
        this.bg.render()
        this.player.render()
//        this.bullet.render()
	this.bulletList.forEach(bullet => {
            bullet.render()
        })
        this.bulletList = this.bulletList.filter(bullet => !bullet.dead)
        this.enemyList.forEach(enemy => {
            enemy.render()
        })
    }
    reset(){
        this.bg.reset()
        this.player.reset()
        this.bulletList = []
    }
}

export default new Status()
