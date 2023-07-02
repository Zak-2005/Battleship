import Gameboard from "./Gameboard";
import Ship from "./ship";


export default class Player{
    constructor(){
    }
randomTurn(gameboard) {
  const unoccupiedPositions = generateValidRandomAttackCoordinates(gameboard)

  const randomAttackCoordinates = Math.floor(Math.random() * unoccupiedPositions.length);
  const [row, col] = unoccupiedPositions[randomAttackCoordinates];

  gameboard.receiveAttack(row, col, document.querySelector(`.cell-${row}-${col}`));
}

generateValidRandomAttackCoordinates(gameboard){
    let unoccupiedPositions = [];

    for (let row = 0; row < gameboard.board.length; row++) {
      for (let col = 0; col < gameboard.board[row].length; col++) {
        if (gameboard.board[row][col] === 0 || gameboard.board[row][col] instanceof Ship) {
          unoccupiedPositions.push([row, col]);
        }
      }
    }
    return unoccupiedPositions;
}

}