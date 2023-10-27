// Igor Bessa
// Title:
// Hours worked (approx):
// Creative tilt: 

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 800,
    scene: [ Load, Menu, Play, GameOver ],
    render: {
        pixelArt: true      
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
