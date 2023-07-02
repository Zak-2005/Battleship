import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./ship";
export function generateComputerGrid(
  computerPhysicalBoard,
  computerGameboard,
  playerComputer,
  userGameboard
) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", () => {
        if (computerGameboard.receiveAttack(i, j, cell)) {
          playerComputer.randomTurn(userGameboard);
        }
      });
      computerPhysicalBoard.appendChild(cell);
    }
  }
}

export function generateUserGrid(userPhysicalBoard, userGameboard) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let cell = document.createElement("div");
      cell.classList.add(`cell-${row}-${col}`);
      if (userGameboard.board[row][col] instanceof Ship) {
        cell.style.backgroundColor = "black";
      }
      userPhysicalBoard.appendChild(cell);
    }
  }
}

