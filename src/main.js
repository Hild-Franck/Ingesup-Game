const { gamePreload, gameCreate, gameUpdate } = require('./stages')

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload, create })

function preload(){ gamePreload(game) }

function create(){ gameCreate(game) }