const sign = require('./sign')
const vectorize = ({ x, y }) => {
	if(x !== 0 && y !== 0) {
		x = Math.sqrt(( x * x ) / 2) * sign(x)
		y = Math.sqrt(( y * y ) / 2) * sign(y)
	}

	return { x, y }
}

module.exports = vectorize

