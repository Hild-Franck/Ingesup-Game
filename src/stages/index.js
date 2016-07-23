const gamePreload = require('./load')
const { gameCreate, gameUpdate } = require('./create')
let map, layer, cursors, moving = 0

module.exports = { gamePreload, gameCreate }