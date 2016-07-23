const gameUpdate = ({ cursors, moving }) =>
    game => {
    	const camSpeed = 10
        const camera = game.camera
    	if (moving === 0) {
            if (cursors.up.isDown)
            	camera.y -= camSpeed
            else if (cursors.down.isDown)
                camera.y += camSpeed

            if (cursors.left.isDown)
                camera.x -= camSpeed
            else if (cursors.right.isDown)
                camera.x += camSpeed

        } else {
            if (cursors.left.isDown)
                camera.x -= camSpeed
            else if (cursors.right.isDown)
                camera.x += camSpeed

            if (cursors.up.isDown)
                camera.y -= camSpeed
            else if (cursors.down.isDown)
                camera.y += camSpeed
        }
    }

module.exports = gameUpdate