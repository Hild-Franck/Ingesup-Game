const mapSizeMax = 1280
const worldSize = 800

let mapSizeCurrent = mapSizeMax
let worldScale = 1
const initZoom = (game, world) => {
	game.camera.bounds = new Phaser.Rectangle(0, 0, 1280, 1280)
	game.camera.focusOnXY(1280 / 2, 1280 / 2)
	return event => {
		const camPosition = {
			x: game.camera.x + game.camera.width / 2,
			y: game.camera.y + game.camera.height / 2
		}
        mapSizeCurrent = game.input.mouse.wheelDelta < 0
        	? mapSizeCurrent - 400
        	: mapSizeCurrent + 400
        mapSizeCurrent = Phaser.Math.clamp(mapSizeCurrent, worldSize , mapSizeMax)
        worldScale = (mapSizeCurrent/mapSizeMax)
        game.camera.bounds.width = game.camera.bounds.height = 1280 * worldScale
        game.camera.focusOnXY(camPosition.x, camPosition.y)
        return worldScale
    }
}

module.exports = initZoom