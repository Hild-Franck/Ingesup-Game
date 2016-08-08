const player = {
	x: 0,
	y: 0,
	speed: 4,
	move: ({ x, y }) => {
		player.x += x
		player.y += y
	}
}

module.exports = player