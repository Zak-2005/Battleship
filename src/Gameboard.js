import Ship from "./ship";
import endGame from "./endGame";
export default class Gameboard {
  boardSize = 10;
  constructor() {
    this.board = [];
    this.ships = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.boardSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i][j] = 0;
      }
    }
  }

  placeShip(ship, row, column) {
    if (this.PlaceShipValid(ship, row, column) === false) return false;
    this.ships.push(ship);
    if (ship.direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.board[i + row][column] = ship;
        let cell = document.querySelector(`.cell-${i + row}-${column}`);
        if (cell) {
          cell.style.backgroundColor = "black";
        }
      }
    } else {
      for (let j = 0; j < ship.length; j++) {
        this.board[row][j + column] = ship;
      }
    }
  }

  userShips() {
    const Carrier = new Ship(5);

    const Battleship = new Ship(4);

    const Cruiser = new Ship(3);

    const Submarine = new Ship(3);

    const Destroyer = new Ship(2);

    return [Carrier, Battleship, Cruiser, Submarine, Destroyer];
  }

  placeRandomShips() {
    const Carrier = new Ship(5);
    this.randomDirection(Carrier);
    const carrierCoords = this.randomCoordinates(Carrier);
    this.placeShip(Carrier, carrierCoords[0], carrierCoords[1]);

    const Battleship = new Ship(4);
    this.randomDirection(Battleship);
    const battleShipCoords = this.randomCoordinates(Battleship);
    this.placeShip(Battleship, battleShipCoords[0], battleShipCoords[1]);

    const Cruiser = new Ship(3);
    this.randomDirection(Cruiser);
    const cruiserCoords = this.randomCoordinates(Cruiser);
    this.placeShip(Cruiser, cruiserCoords[0], cruiserCoords[1]);

    const Submarine = new Ship(3);
    this.randomDirection(Submarine);
    const submarineCoords = this.randomCoordinates(Submarine);
    this.placeShip(Submarine, submarineCoords[0], submarineCoords[1]);

    const Destroyer = new Ship(2);
    this.randomDirection(Destroyer);
    const destroyerCoords = this.randomCoordinates(Destroyer);
    this.placeShip(Destroyer, destroyerCoords[0], destroyerCoords[1]);
  }

  randomDirection(ship) {
    const direction = Math.floor(Math.random() * 2);
    if (direction === 0) return;
    else {
      ship.direction = "horizontal";
      return;
    }
  }

  randomCoordinates(ship) {
    let validPositions = [];

    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[row].length; col++) {
        if (this.PlaceShipValid(ship, row, col)) {
          validPositions.push([row, col]);
        }
      }
    }
    const randomIndex = Math.floor(Math.random() * validPositions.length);
    const [row, col] = validPositions[randomIndex];

    return [row, col];
  }

  PlaceShipValid(ship, row, column) {
    if (ship.direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (i + row >= this.board.length) return false;
        if (this.board[i + row][column] !== 0) return false;
      }
    } else {
      for (let j = 0; j < ship.length; j++) {
        if (j + column >= this.board[row].length) return false;
        if (this.board[row][j + column] !== 0) return false;
      }
    }
    return true;
  }

  receiveAttack(row, col, cell) {
    if (this.board[row][col] instanceof Ship) {
      this.board[row][col].hits++;
      this.board[row][col].isSunk();
      cell.style.backgroundColor = "red";
      this.board[row][col] = "hit";
      if (this.allShipsSunk()) {
        endGame();
      }
    } else if (this.board[row][col] === 0) {
      this.board[row][col] = "missedShot";
      if (cell) {
        cell.style.backgroundColor = "grey";
      }
    } else {
      return false;
    }
    return true;
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].sunk === false) return false;
    }
    return true;
  }

  generateDirections() {
    const pageDirections = document.querySelector("#title");
    pageDirections.textContent = "Battle Ship";
  }
}
