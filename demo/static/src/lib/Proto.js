Object.prototype[Symbol.iterator] = function* (){
    for(let i in this){
        yield this[i]
    }
}
Function.prototype.onceBind = (function (){
    const bindMap = new Map()
    return function (obj){
        if(!bindMap.get(obj)){
            bindMap.set(obj, new Map())
        }
        if(!bindMap.get(obj).get(this)){
            bindMap.get(obj).set(this, this.bind(obj))
        }
        return bindMap.get(obj).get(this)
    }
})()