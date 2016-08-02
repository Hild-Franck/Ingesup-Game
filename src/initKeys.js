const initZoom = require('./zoom/initZoom')
const world = require('./worldConfig')

const keys = {}
const zoomRatio = { value: 1 }

const initKeys = (game, player) => {
	const zooming = initZoom(game, world)

	const keyboard = game.input.keyboard
	const playerKeys = keyboard.addKeys({
		'up': Phaser.KeyCode.z,
		'down': Phaser.KeyCode.s,
		'right': Phaser.KeyCode.d,
		'left': Phaser.KeyCode.q
	})
	const cursors = keyboard.createCursorKeys()

    game.input.mouse.mouseWheelCallback = event => zoomRatio.value = zooming(event)
 
	return { zoomRatio, keys: { cursors, playerKeys } }
}

module.exports = initKeys