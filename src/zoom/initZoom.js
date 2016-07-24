const mapSizeMax = 1280
const worldSize = 800

let mapSizeCurrent = mapSizeMax
let worldScale = 1
const initZoom = (game, world) => {
	game.camera.bounds = new Phaser.Rectangle(0, 0, 1280, 1280)
	game.camera.focusOnXY(1280 / 2, 1280 / 2)
	return event => {
        mapSizeCurrent = game.input.mouse.wheelDelta < 0
        	? mapSizeCurrent - 400
        	: mapSizeCurrent + 400
        mapSizeCurrent = Phaser.Math.clamp(mapSizeCurrent, worldSize , mapSizeMax)
        worldScale = (mapSizeCurrent/mapSizeMax)
        game.camera.bounds.width = game.camera.bounds.height = 1280 * worldScale
        return worldScale
    }
}

module.exports = initZoom