import Player from "./Player";
import Gameboard from "./Gameboard";
import Ship from "./ship";
import { generateComputerGrid, generateUserGrid } from "./generateGrids";

let winner = false;

const userGameboard = new Gameboard();
userGameboard.placeShip(new Ship(4), 0, 0);
const computerGameboard = new Gameboard();
computerGameboard.placeShip(new Ship(4), 0, 0);
const User = new Player();
const Computer = new Player();

generateUserGrid(document.querySelector(".playerBoard"), userGameboard);

generateComputerGrid(
  document.querySelector(".computerBoard"),
  computerGameboard,
  Computer,
  userGameboard
);

