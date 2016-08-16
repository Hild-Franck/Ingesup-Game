const sign = require('./sign')
const toDirection = (dir, x, y) =>
	x === 0 && y === 0
		? dir
		: (Math.acos(x/4)) * 180 / Math.PI * sign(y)

module.exports = toDirection 