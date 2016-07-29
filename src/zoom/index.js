const easing = 0.1
const zoom = (zoomRatio, stageGroup) => {
	console.log(zoomRatio.value)
    stageGroup.scale.x += (zoomRatio.value-stageGroup.scale.x)*easing;   //easing
    stageGroup.scale.y += (zoomRatio.value-stageGroup.scale.y)*easing;
}


module.exports = zoom