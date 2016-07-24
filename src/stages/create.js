const gameUpdate = require('./update')
const world = require('../worldConfig')
const initZoom = require('../zoom/initZoom')

let moving = 0
let zoomRatio = 1

const toggle = () => moving = (moving === 0)
	? moving = 1
	: moving = 0

const gameCreate = game => {
	const stageGroup = game.add.group()
	const zooming = initZoom(game, world)
	const map = game.add.tilemap('tilemap')
	map.addTilesetImage('world')

	const layer = map.createLayer('layer')
    layer.resize(2000, 2000)
    stageGroup.add(layer)

    const cursors = game.input.keyboard.createCursorKeys()

    game.input.onDown.add(toggle, this)
    game.input.mouse.mouseWheelCallback = event =>
    	zoomRatio = zooming(event)

    game.state.update = () => gameUpdate({ cursors, moving, zoomRatio, stageGroup, layer })(game)
}

module.exports = gameCreate