(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _require = require('./stages');

var gamePreload = _require.gamePreload;
var gameCreate = _require.gameCreate;
var gameUpdate = _require.gameUpdate;


var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

function preload() {
  gamePreload(game);
}

function create() {
  gameCreate(game);
}

},{"./stages":3}],2:[function(require,module,exports){
'use strict';

var gameUpdate = require('./update');
var moving = 0;
var toggle = function toggle() {
				return moving = moving === 0 ? moving = 1 : moving = 0;
};

var gameCreate = function gameCreate(game) {
				var map = game.add.tilemap('tilemap');
				map.addTilesetImage('world');

				var layer = map.createLayer('layer');
				layer.resizeWorld();

				var cursors = game.input.keyboard.createCursorKeys();

				game.input.onDown.add(toggle, undefined);

				game.state.update = function () {
								return gameUpdate({ cursors: cursors, moving: moving })(game);
				};
};

module.exports = { gameCreate: gameCreate };

},{"./update":5}],3:[function(require,module,exports){
'use strict';

var gamePreload = require('./load');

var _require = require('./create');

var gameCreate = _require.gameCreate;
var gameUpdate = _require.gameUpdate;

var map = void 0,
    layer = void 0,
    cursors = void 0,
    moving = 0;

module.exports = { gamePreload: gamePreload, gameCreate: gameCreate };

},{"./create":2,"./load":4}],4:[function(require,module,exports){
'use strict';

var gamePreload = function gamePreload(game) {
	game.load.tilemap('tilemap', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('world', 'assets/tilesheet_complete.png');
};

module.exports = gamePreload;

},{}],5:[function(require,module,exports){
"use strict";

var gameUpdate = function gameUpdate(_ref) {
    var cursors = _ref.cursors;
    var moving = _ref.moving;
    return function (game) {
        var camSpeed = 10;
        var camera = game.camera;
        if (moving === 0) {
            if (cursors.up.isDown) camera.y -= camSpeed;else if (cursors.down.isDown) camera.y += camSpeed;

            if (cursors.left.isDown) camera.x -= camSpeed;else if (cursors.right.isDown) camera.x += camSpeed;
        } else {
            if (cursors.left.isDown) camera.x -= camSpeed;else if (cursors.right.isDown) camera.x += camSpeed;

            if (cursors.up.isDown) camera.y -= camSpeed;else if (cursors.down.isDown) camera.y += camSpeed;
        }
    };
};

module.exports = gameUpdate;

},{}]},{},[1,2,3,4,5]);
