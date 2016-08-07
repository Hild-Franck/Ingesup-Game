const zoom = require('../zoom')
const cameraControl = require('../controls/camera')
const playerControl = require('../controls/player')
const gameUpdate = ({ keys, zoomRatio, stageGroup, layer }) =>
    game => {
        cameraControl(game, keys)
        playerControl(game, keys)
        zoom(zoomRatio, stageGroup, layer)
    }

module.exports = gameUpdate