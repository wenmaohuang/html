import rectCollide from "../tools.js"
export default [
    {
	//        type: "touchstart",
	type: "mousedown",
        handleList: [
            function (e){
                const mouseRect = {
//                    x: e.touches[0].clientX - 5,
  //                  y: e.touches[0].clientY - 5,
		    x: e.clientX - 5,
		    y: e.clientY - 5,
                    w: 10,
                    h: 10,

                }
                // console.log(rectCollide(mouseRect,this.rect));
                console.log(this.rect);
                if(rectCollide(mouseRect,this.rect)){
                    this.draged = true
                }

            }
        ]
    },
    {
	//        type: "touchmove",
	type: "mousemove",
        handleList: [
            function (e){

                if(!this.draged) return
//                this.rect.x = e.touches[0].clientX - this.rect.w / 2
		//this.rect.y = e.touches[0].clientY - this.rect.h / 2
		this.rect.x = e.clientX - this.rect.w / 2
		this.rect.y = e.clientY - this.rect.h / 2
		
                console.log(this.rect.x)

            }
        ]
    },
    {
	//        type: "touchend",
	type: "mouseup",
        handleList: [
            function (e) {
                this.draged = false
            }
        ]
    }

]
