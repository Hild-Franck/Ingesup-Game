const { gamePreload, gameCreate, gameUpdate } = require('./stages')
const world = require('./worldConfig')

const game = new Phaser.Game(world.worldWidth, world.worldHeight, Phaser.AUTO, '', { preload, create })

function preload(){ gamePreload(game) }

function create(){ gameCreate(game) }