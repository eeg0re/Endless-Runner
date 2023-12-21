// Igor Bessa
// Title: Sammy Slug Forest Escape
// Credits: 
// Play scene music is "8 Bit Surf" by David Renda on Fesliyan Studios, https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6
// UI sound effect is by Lesiakower on Pixabay, https://pixabay.com/sound-effects/search/8-bit/
// Game Over sound effect is by Pixabay, https://pixabay.com/sound-effects/search/game-over/ 
// Jump sound effect by Pixabay, https://pixabay.com/sound-effects/search/8-bit%20jump/
// Menu scene music is "beam" by sinneschlösen on Pixabay, https://pixabay.com/music/search/8bit/ 

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 320,
    scene: [ Load, Menu, Credits, Play, GameOver ],
    render: {
        pixelArt: true      
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min:{   
            width: 480,
            height: 320

        }
    }
}

let game = new Phaser.Game(config);

let cursors;
let { height, width } = game.config;
let menuSongIsPlaying = false;
let songIsPlaying = false;
let player_time; 
