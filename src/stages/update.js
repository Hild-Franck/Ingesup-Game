const zoom = require('../zoom')
const gameUpdate = ({ cursors, zoomRatio, stageGroup, layer }) =>
    game => {
    	const camSpeed = 10
        const camera = game.camera

    	if (cursors.up.isDown)
                camera.y -= camSpeed
        else if (cursors.down.isDown)
                camera.y += camSpeed

        if (cursors.left.isDown)
                camera.x -= camSpeed
        else if (cursors.right.isDown)
                camera.x += camSpeed

        zoom(zoomRatio, stageGroup, layer)
    }

module.exports = gameUpdate