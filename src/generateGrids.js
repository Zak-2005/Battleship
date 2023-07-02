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
        if (userGameboard.ships.length == 5) {
          if (computerGameboard.receiveAttack(i, j, cell)) {
            playerComputer.randomTurn(userGameboard);
          }
        }
      });
      computerPhysicalBoard.appendChild(cell);
    }
  }
}

export function generateUserGrid(userPhysicalBoard, userGameboard) {
  let userShips = userGameboard.userShips(); //[Carrier,Battleship,Cruiser,Submarine,Destroyer]
  let shipIndex = 0;

  document.querySelector(".rotateShip").addEventListener("click", () => {
    userShips[shipIndex].changeDirection();
  });
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let cell = document.createElement("div");
      cell.classList.add(`cell-${row}-${col}`);
      cell.addEventListener("mouseenter", () => {
        if (shipIndex >= userShips.length) return;
        if (userShips[shipIndex].direction === "vertical") {
          highlightVerticalShip(userShips[shipIndex], row, col, true);
        } else {
          highlightHorizontalShip(userShips[shipIndex], row, col, true);
        }
      });
      cell.addEventListener("mouseleave", () => {
        if (shipIndex >= userShips.length) {
          userGameboard.shipsPlaced = true;
          return;
        }
        if (userShips[shipIndex].direction === "vertical") {
          highlightVerticalShip(userShips[shipIndex], row, col, false);
        } else {
          highlightHorizontalShip(userShips[shipIndex], row, col, false);
        }
      });

      cell.addEventListener("click", () => {
        if (
          shipIndex >= userShips.length ||
          cell.getAttribute("id") === "placed-ship" ||
          !userGameboard.PlaceShipValid(userShips[shipIndex], row, col)
        )
          return;

        userGameboard.placeShip(userShips[shipIndex], row, col);

        highlightPlacedShip(userShips[shipIndex], row, col);
        shipIndex++;
        if (shipIndex >= userShips.length) {
          userGameboard.generateDirections();
          const rotateButton = document.querySelector(".rotateShip");
          document
            .querySelector("body")
            .removeChild(rotateButton);
        }
      });

      userPhysicalBoard.appendChild(cell);
    }
  }
}

function highlightPlacedShip(ship, row, col) {
  if (ship.direction === "vertical") {
    for (let i = 0; i < ship.length; i++) {
      let cell = document.querySelector(`.cell-${i + row}-${col}`);
      cell.setAttribute("id", "placed-ship");
    }
  } else {
    for (let i = 0; i < ship.length; i++) {
      let cell = document.querySelector(`.cell-${row}-${i + col}`);
      cell.setAttribute("id", "placed-ship");
    }
  }
}
function highlightVerticalShip(ship, row, col, highlight) {
  for (let i = 0; i < ship.length; i++) {
    let cell = document.querySelector(`.cell-${i + row}-${col}`);
    if (cell) {
      if (highlight) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "";
      }
    }
  }
}
function highlightHorizontalShip(ship, row, col, highlight) {
  for (let i = 0; i < ship.length; i++) {
    let cell = document.querySelector(`.cell-${row}-${i + col}`);
    if (cell) {
      if (highlight) {
        cell.style.backgroundColor = "black";
      } else {
        cell.style.backgroundColor = "";
      }
    }
  }
}
