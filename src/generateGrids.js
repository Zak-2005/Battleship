import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./ship";
export function generateComputerGrid(computerPhysicalBoard, computerGameboard, playerComputer, userGameboard) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", ()=>{
      renderAttack(i,j, computerGameboard);
      playerComputer.randomTurn(userGameboard);
      })
      computerPhysicalBoard.appendChild(cell);
    }
  }
}

export function generateUserGrid(userPhysicalBoard, userGameboard) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      if(userGameboard.board[i][j] instanceof Ship){
        cell.style.backgroundColor = "black";
      }
      userPhysicalBoard.appendChild(cell);
    }
  }
}

function renderAttack(xCoord, yCoord, opponentGameboard){
  opponentGameboard.recieveAttack(xCoord, yCoord);
}