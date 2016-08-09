const initPlayer = sprite => {
	const player = {
		x: 0,
		y: 0,
		speed: 4,
		sprite,
		move: ({ x, y }) => {
			player.x += x
			player.y += y
			player.sprite.x = player.x
			player.sprite.y = player.y
		}
	}
	return player
}

module.exports = initPlayer