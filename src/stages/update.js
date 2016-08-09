const zoom = require('../zoom')
const player = require('../entities/player')
const cameraControl = require('../controls/camera')
const playerControl = require('../controls/player')
const gameUpdate = ({ keys, zoomRatio, stageGroup, layer, player }) =>
    game => {
        cameraControl(game, keys)
        playerControl(game, keys, player)
        zoom(zoomRatio, stageGroup, layer)
    }

module.exports = gameUpdate