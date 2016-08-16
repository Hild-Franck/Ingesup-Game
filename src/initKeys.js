const initZoom = require('./zoom/initZoom')
const world = require('./worldConfig')

const keys = {}
const zoomRatio = { value: 1 }

const initKeys = (game, player) => {
	const zooming = initZoom(game, world)

	const keyboard = game.input.keyboard
	const playerKeys = keyboard.addKeys({
		'up': Phaser.KeyCode.Z,
		'down': Phaser.KeyCode.S,
		'right': Phaser.KeyCode.D,
		'left': Phaser.KeyCode.Q
	})
	const cursors = keyboard.createCursorKeys()

    game.input.mouse.mouseWheelCallback = event => zoomRatio.value = zooming(event)
 
	return { zoomRatio, keys: { cursors, playerKeys } }
}

module.exports = initKeys