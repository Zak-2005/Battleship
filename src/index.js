import Player from "./Player";
import Gameboard from "./Gameboard";
import Ship from "./ship";
import { generateComputerGrid, generateUserGrid } from "./generateGrids";
import { generateVisuals } from "./generateWebpage";

export default function gameLoop(){
generateVisuals()

const userGameboard = new Gameboard();
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