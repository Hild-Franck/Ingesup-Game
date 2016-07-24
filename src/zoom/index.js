const easing = 0.1
const zoom = (zoomRatio, stageGroup) => {
    stageGroup.scale.x += (zoomRatio-stageGroup.scale.x)*easing;   //easing
    stageGroup.scale.y += (zoomRatio-stageGroup.scale.y)*easing;
}


module.exports = zoom