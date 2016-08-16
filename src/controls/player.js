const vectorize = require('../utils/vectorize')
const playerControl = (game, keys, player) => {
	const speed = {
		x: 0,
		y: 0
	}
	const playerSpeed = player.speed
	const playerKeys = keys.playerKeys

	if (playerKeys.up.isDown) speed.y -= playerSpeed
	if (playerKeys.down.isDown) speed.y += playerSpeed
	if (playerKeys.right.isDown) speed.x += playerSpeed
	if (playerKeys.left.isDown) speed.x -= playerSpeed

	player.move(vectorize(speed))
}

module.exports = playerControl