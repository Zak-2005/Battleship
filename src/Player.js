import Gameboard from "./Gameboard";
import Ship from "./ship";


export default class Player{
    constructor(){
    }
randomTurn(gameboard) {
  let unoccupiedPositions = [];

  // Collect all unoccupied positions
  for (let row = 0; row < gameboard.board.length; row++) {
    for (let col = 0; col < gameboard.board[row].length; col++) {
      if (gameboard.board[row][col] === 0 || gameboard.board[row][col] instanceof Ship) {
        unoccupiedPositions.push([row, col]);
      }
    }
  }

  if (unoccupiedPositions.length === 0) {
    console.log("No valid coordinates available.");
    return null;
  }

  // Randomly select a position from the unoccupied positions
  const randomIndex = Math.floor(Math.random() * unoccupiedPositions.length);
  const [row, col] = unoccupiedPositions[randomIndex];

  // Call the receiveAttack method with the obtained coordinates
  gameboard.receiveAttack(row, col, document.querySelector(`.cell-${row}-${col}`));

  return [row, col];
}


    randomCoordinates(){
        let row = Math.floor((Math.random()*9)+1)
        let col = Math.floor((Math.random()*9)+1)
        console.log(row,col)
        return [row, col]
    }
}