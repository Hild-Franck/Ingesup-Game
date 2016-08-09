const gamePreload = game => {
	game.load.tilemap('tilemap','assets/map.json', null, Phaser.Tilemap.TILED_JSON)
	game.load.image('world', 'assets/tilesheet_complete.png')
	game.load.image('character', 'assets/manBlue_stand.png')
}

module.exports = gamePreload