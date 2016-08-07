const gameUpdate = require('./update')
const world = require('../worldConfig')
const initZoom = require('../zoom/initZoom')
const initKeys = require('../initKeys')

let zoomRatio = 1

const gameCreate = game => {
	const stageGroup = game.add.group()
	const map = game.add.tilemap('tilemap')
	map.addTilesetImage('world')

	const layer = map.createLayer('layer')
    layer.resize(2000, 2000)
    stageGroup.add(layer)

    let { zoomRatio, keys } = initKeys(game)

    game.state.update = () =>
    	gameUpdate({ keys, zoomRatio, stageGroup, layer })(game)
}

module.exports = gameCreate