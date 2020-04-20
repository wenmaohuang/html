function rectCollide(rectA, rectB){
    const xMin = Math.max(rectA.x, rectB.x)
    const yMin = Math.max(rectA.y, rectB.y)
    const xMax = Math.min(rectA.x + rectA.w, rectB.x + rectB.w)
    const yMax = Math.min(rectA.y + rectA.h, rectB.y + rectB.h)
    const width = xMax - xMin
    const height = yMax - yMin
    if(width > 0 && height > 0){
        return width * height
    }else{
        return 0
    }
}
export default rectCollide