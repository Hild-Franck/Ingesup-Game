const camSpeed = 10

const cameraControl = (game, keys) => {
	const camera = game.camera
	const cursors = keys.cursors
    if (cursors.up.isDown)
    	camera.y -= camSpeed
    else if (cursors.down.isDown)
        camera.y += camSpeed

    if (cursors.left.isDown)
        camera.x -= camSpeed
    else if (cursors.right.isDown)
        camera.x += camSpeed
}

module.exports = cameraControl