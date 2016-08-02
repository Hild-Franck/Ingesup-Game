const vectorize = (x, y) => {
	if(x !== 0 && y !== 0)
		x = y = Math.sqrt(( x * x ) / 2)
	return { x, y }
}

module.exports = vectorize

