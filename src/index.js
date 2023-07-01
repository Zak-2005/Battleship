import Player from "./Player";
import Gameboard from "./Gameboard";
import Ship from "./ship";
import generateGrid from "./generateGrids";

class Gameloop {
  constructor() {
    this.userGameboard = new Gameboard();
    this.computerGameboard = new Gameboard();
    this.User = new Player();
    this.Computer = new Player();
    this.generateVisualBoards();
  }
  generateVisualBoards() {
    const playerBoard = document.querySelector(".playerBoard");
    const computerBoard = document.querySelector(".computerBoard");
    generateGrid(playerBoard);
    generateGrid(computerBoard);
  }
}

let game = new Gameloop();

