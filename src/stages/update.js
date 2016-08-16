const zoom = require('../zoom')
const player = require('../entities/player')
const cameraControl = require('../controls/camera')
const playerControl = require('../controls/player')
const gameUpdate = ({ keys, zoomRatio, stageGroup, layer, player }) =>
    game => {
        zoom(zoomRatio, stageGroup, layer)
        game.physics.arcade.collide(player.sprite, layer)
        cameraControl(game, keys)
        playerControl(game, keys, player)
    }

module.exports = gameUpdate