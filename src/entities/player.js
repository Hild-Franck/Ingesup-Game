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
			player.sprite.body.velocity.x = 0
			player.sprite.body.velocity.y = 0
			player.x += x
			player.y += y
			player.dir = toDirection(player.dir, x, y)
			player.sprite.angle = player.dir
			player.sprite.body.velocity.x += x * 30
			player.sprite.body.velocity.y += y * 30
		}
	}
	return player
}

module.exports = initPlayer