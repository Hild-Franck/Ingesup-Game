let gameUpdate = require('./update')
let moving = 0
const toggle = () => moving = (moving === 0)
	? moving = 1
	: moving = 0

const gameCreate = game => {
	const map = game.add.tilemap('tilemap')
	map.addTilesetImage('world')

	const layer = map.createLayer('layer')
    layer.resizeWorld()

    const cursors = game.input.keyboard.createCursorKeys()

    game.input.onDown.add(toggle, this)

    game.state.update = () => gameUpdate({ cursors, moving })(game)
}

module.exports = { gameCreate }