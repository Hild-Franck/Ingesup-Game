const zoom = require('../zoom')
const gameUpdate = ({ keys, moving, zoomRatio, stageGroup, layer }) =>
    game => {
    	const camSpeed = 10
        const camera = game.camera
    	if (moving === 0) {
            if (keys.cursors.up.isDown)
            	camera.y -= camSpeed
            else if (keys.cursors.down.isDown)
                camera.y += camSpeed

            if (keys.cursors.left.isDown)
                camera.x -= camSpeed
            else if (keys.cursors.right.isDown)
                camera.x += camSpeed

        } else {
            if (keys.cursors.left.isDown)
                camera.x -= camSpeed
            else if (keys.cursors.right.isDown)
                camera.x += camSpeed

            if (keys.cursors.up.isDown)
                camera.y -= camSpeed
            else if (keys.cursors.down.isDown)
                camera.y += camSpeed
        }
        zoom(zoomRatio, stageGroup, layer)
    }

module.exports = gameUpdate