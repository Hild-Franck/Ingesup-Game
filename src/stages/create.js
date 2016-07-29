const gameUpdate = require('./update')
const initSprites = require('../sprite/initSprites')
const initKeys = require('../initKeys')

const gameCreate = game => {
	const { zoomRatio, cursors } = initKeys(game)
	const { layer, stageGroup } = initSprites(game)
    game.state.update = () => gameUpdate({ cursors, zoomRatio, stageGroup, layer })(game)
}

module.exports = gameCreate