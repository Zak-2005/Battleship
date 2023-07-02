export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.direction = "vertical";
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
    }
  }
  changeDirection(){
    if(this.direction==="vertical"){
      this.direction = "horizontal"
    }
    else{
      this.direction="vertical"
    }
  }
}
