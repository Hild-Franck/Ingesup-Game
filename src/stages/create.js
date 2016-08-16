const gameUpdate = require('./update')
const world = require('../worldConfig')
const initZoom = require('../zoom/initZoom')
const initKeys = require('../initKeys')
const initPlayer = require('../entities/player')

let zoomRatio = 1

const gameCreate = game => {
	const stageGroup = game.add.group()

	const map = game.add.tilemap('tilemap')
	map.addTilesetImage('world')

	const layer = map.createLayer('layer')
    layer.resize(2000, 2000)

    map.setCollisionBetween(109, 150);

    const playerSprite = game.add.sprite(0, 0, 'character')
    game.physics.enable(playerSprite)
    stageGroup.add(playerSprite)

    const player = initPlayer(playerSprite)

    let { zoomRatio, keys } = initKeys(game)

    playerSprite.body.bounce.set(0.2)
    playerSprite.body.tilePadding.set(32)

    game.world.bringToTop(stageGroup)

    game.state.update = () =>
    	gameUpdate({ keys, zoomRatio, stageGroup, layer, player })(game)
}

module.exports = gameCreate