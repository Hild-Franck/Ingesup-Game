const toDirection = require('../utils/toDirection')
const initPlayer = sprite => {
	sprite.anchor.setTo(0.5, 0.5)
	const player = {
		x: 0,
		y: 0,
		speed: 4,
		dir: 90,
		sprite,
		move: ({ x, y }) => {
			player.x += x
			player.y += y
			player.dir = toDirection(player.dir, x, y)
			player.sprite.angle = player.dir
			player.sprite.x = player.x
			player.sprite.y = player.y
		}
	}
	return player
}

module.exports = initPlayer