const initSprite = game => {
	const map = game.add.tilemap('tilemap')
	map.addTilesetImage('world')

	const layer = map.createLayer('layer')
    layer.resize(2000, 2000)

	const stageGroup = game.add.group()
    stageGroup.add(layer)

    return { layer, stageGroup }
}

module.exports = initSprite