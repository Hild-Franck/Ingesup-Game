const initZoom = require('./zoom/initZoom')
const world = require('./worldConfig')

const keys = {}
const zoomRatio = { value: 1 }

const initKeys = game => {
	const cursors = game.input.keyboard.createCursorKeys()
	const zooming = initZoom(game, world)


    game.input.mouse.mouseWheelCallback = event => {
    	zoomRatio.value = zooming(event)
    	console.log(zoomRatio.value)
    }

	return { zoomRatio, cursors }
}

module.exports = initKeys