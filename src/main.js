// Igor Bessa
// Title:
// Hours worked (approx):
// Creative tilt: 

"use strict"

let debugBool = true;

let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 320,
    scene: [ Load, Menu, Play, GameOver ],
    render: {
        pixelArt: true      
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: debugBool
        }
    },
    zoom: 2
}

let game = new Phaser.Game(config);

let cursors;
let { height, width } = game.config;
