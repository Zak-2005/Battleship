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
    if (this.PlaceShipValid(ship, row, column) === false);
    this.ships.push(ship);
    console.log(this.ships)
    if (ship.direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.board[i + row][column] = ship;
      }
    } else {
      for (let j = 0; j < ship.length; j++) {
        this.board[row][j + column] = ship;
      }
    }
  }

  placeRandomShips() {
    const Carrier = new Ship(5);
    
    const Battleship = new Ship(4);
    
    const Cruiser = new Ship(3);

    const Submarine = new Ship(3);

    const Destroyer = new Ship(2);

    this.placeShip(Carrier, 0, 0);
    this.placeShip(Battleship, 0, 1);
    this.placeShip(Cruiser, 0, 2);
    this.placeShip(Submarine, 0, 3);
    this.placeShip(Destroyer, 0, 4);
  }

  PlaceShipValid(ship, row, column) {
    if (ship.direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (i + row + 1 >= this.board.length) return false;
        if (this.board[i + row + 1][column] !== 0) return false;
      }
    } else {
      for (let j = 0; j < ship.length; j++) {
        if (i + column + 1 >= this.board[i].length) return false;
        if (this.board[row][j + column + 1] !== 0) return false;
      }
    }
  }

  receiveAttack(row, col, cell) {
    if (this.board[row][col] instanceof Ship) {
      this.board[row][col].hits++;
      this.board[row][col].isSunk();
      cell.style.backgroundColor = "red";
      console.log(this.board[row][col])
      this.board[row][col] = "hit";
      if (this.allShipsSunk()) {
        endGame();
      }
    } else if (this.board[row][col] === 0) {
      this.board[row][col] = "missedShot";
      cell.style.backgroundColor = "grey";
    }
    else{
      return false;
    }
    return true
  }

  allShipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].sunk === false) return false;
    }
    return true;
  }
}
