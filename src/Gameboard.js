export default class Gameboard {
  boardSize = 10;
  constructor() {
    this.board = [];
    this.ships = []
    this.init()
  }

  init() {
    for (let i = 0; i < this.boardSize; i++) {
        this.board[i]=[]
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i][j]=0;
      }
    }
  }

  placeShip(ship, row, column) {
    if(this.PlaceShipValid(ship,row,column)===false) return false;
    this.ships.push(ship);

    if(ship.direction==="vertical"){
        for(let i = 0; i<ship.length; i++){
            this.board[i+row][column] = ship;
        }
    }
    else{
        for(let j = 0; j<ship.length; j++){
            this.board[row][j+column] = ship;
        }
    }
  }

  PlaceShipValid(ship,row,column){
    if(ship.direction==="vertical"){
        for(let i = 0; i<ship.length; i++){
            if(i+row+1>=this.board.length) return false;
            if(this.board[i+row+1][column]!==0) return false;
        }
    }
    else{
        for(let j = 0; j<ship.length; j++){
            if(i+column+1>=this.board[i].length) return false;
            if(this.board[row][j+column+1]!==0) return false;
        }
    }
  }

  recieveAttack(xCoord, yCoord){
    if(this.board[xCoord][yCoord]!==0){
        this.board[xCoord][yCoord].hits++;
    }
    else{
        this.board[xCoord][yCoord]="missedShot"
    }
  }

  allShipsSunk(){
    for(let i = 0; i<this.ships.length; i++){
        if(this.ships[i].sunk===false) return false;
    }
    return true;
  }
  
}
