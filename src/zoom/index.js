const easing = 0.1
const zoom = (zoomRatio, stageGroup, layer) => {
    stageGroup.scale.x += (zoomRatio.value-stageGroup.scale.x) * easing
    stageGroup.scale.y += (zoomRatio.value-stageGroup.scale.y) * easing

    layer.setScale(stageGroup.scale.x, stageGroup.scale.x)
}


module.exports = zoom