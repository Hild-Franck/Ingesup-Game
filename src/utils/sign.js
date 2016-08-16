const sign = (...args) =>
	args.reduce((acc, value) => {
		return value < 0
			? acc * -1
			: acc
	}, 1)

module.exports = sign