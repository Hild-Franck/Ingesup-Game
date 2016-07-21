(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var map;
var layer;
var cursors;
var moving = 0;

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
    game.load.tilemap('tilemap', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('world', 'assets/tilesheet_complete.png');
}

function create() {
    map = game.add.tilemap('tilemap');
    map.addTilesetImage('world');

    layer = map.createLayer('layer');

    layer.resizeWorld();

    cursors = game.input.keyboard.createCursorKeys();

    game.input.onDown.add(toggle, this);
}

function update() {
    if (moving === 0) {
        if (cursors.up.isDown) {
            game.camera.y -= 4;
        } else if (cursors.down.isDown) {
            game.camera.y += 4;
        }

        if (cursors.left.isDown) {
            game.camera.x -= 4;
        } else if (cursors.right.isDown) {
            game.camera.x += 4;
        }
    } else {
        if (cursors.left.isDown) {
            game.camera.x -= 4;
        } else if (cursors.right.isDown) {
            game.camera.x += 4;
        }

        if (cursors.up.isDown) {
            game.camera.y -= 4;
        } else if (cursors.down.isDown) {
            game.camera.y += 4;
        }
    }
}

function toggle() {

    moving = moving === 0 ? moving = 1 : moving = 0;
}

},{}]},{},[1]);
