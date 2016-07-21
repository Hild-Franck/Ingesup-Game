var map;
var layer;
var cursors;
var moving = 0

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload, create, update })
function preload(){
	game.load.tilemap('tilemap','assets/map.json', null, Phaser.Tilemap.TILED_JSON)
	game.load.image('world', 'assets/tilesheet_complete.png')
}

function create(){
	map = game.add.tilemap('tilemap')
	map.addTilesetImage('world')

	layer = map.createLayer('layer')

    layer.resizeWorld()

    cursors = game.input.keyboard.createCursorKeys()

    game.input.onDown.add(toggle, this)
}

function update(){
	if (moving === 0)
    {
        if (cursors.up.isDown)
        {
            game.camera.y -= 4;
        }
        else if (cursors.down.isDown)
        {
            game.camera.y += 4;
        }

        if (cursors.left.isDown)
        {
            game.camera.x -= 4;
        }
        else if (cursors.right.isDown)
        {
            game.camera.x += 4;
        }
    }
    else
    {
        if (cursors.left.isDown)
        {
            card.x -= 4;
        }
        else if (cursors.right.isDown)
        {
            card.x += 4;
        }

        if (cursors.up.isDown)
        {
            card.y -= 4;
        }
        else if (cursors.down.isDown)
        {
            card.y += 4;
        }
    }
}

function toggle() {

    moving = (moving === 0) ? moving = 1 : moving = 0;

}