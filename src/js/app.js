import '../css/style.css'
console.log('app worked')
import GameSavingData from './game.js'
import Game from './game.js'
import {readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js'
const game = new Game();
game.start()