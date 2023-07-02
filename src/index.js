import Player from "./Player";
import Gameboard from "./Gameboard";
import Ship from "./ship";
import { generateComputerGrid, generateUserGrid } from "./generateGrids";

export default function gameLoop(){
const boards = document.querySelector(".boards");
const userBoard = document.createElement("div");
userBoard.classList.add("playerBoard")
const computerBoard = document.createElement("div");
computerBoard.classList.add("computerBoard")
boards.appendChild(userBoard);
boards.appendChild(computerBoard);

const userGameboard = new Gameboard();
userGameboard.placeShip(new Ship(4), 0, 0);
userGameboard.placeShip(new Ship(5), 0, 1);
const computerGameboard = new Gameboard();
const User = new Player();
const Computer = new Player();
computerGameboard.placeRandomShips();
generateUserGrid(document.querySelector(".playerBoard"), userGameboard);

generateComputerGrid(
  document.querySelector(".computerBoard"),
  computerGameboard,
  Computer,
  userGameboard
);
}

gameLoop();