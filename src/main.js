// Igor Bessa
// Title: Sammy Slug Forest Escape
// Hours worked (approx):
// Creative tilt: 
// Credits: 
// Play scene music is "8 Bit Surf" by David Renda on Fesliyan Studios, https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6
// UI sound effect is by Lesiakower on Pixabay, https://pixabay.com/sound-effects/search/8-bit/
// Game Over sound effect is by Pixabay, https://pixabay.com/sound-effects/search/game-over/ 
// Jump sound effect by Pixabay, https://pixabay.com/sound-effects/search/8-bit%20jump/

"use strict"

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
            debug: false
        }
    },
    zoom: 2
}

let game = new Phaser.Game(config);

let cursors;
let { height, width } = game.config;
let songIsPlaying = false;
