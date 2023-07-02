import Ship from "./ship";
import Gameboard from "./Gameboard";

let ship1;
let gameboard;
beforeEach(()=>{
    ship1=new Ship(4);
    gameboard = new Gameboard();
})

test.only("Place ships at specific coordinates", ()=>{
    gameboard.placeShip(ship1, 0, 0);
    expect(gameboard.board[0][0]).not.toBe(0)
    expect(gameboard.board[1][0]).not.toBe(0)
    expect(gameboard.board[2][0]).not.toBe(0)
    expect(gameboard.board[3][0]).not.toBe(0)

})

test("Can't place ships if ship in way", ()=>{
    let ship2 = new Ship(4)
    gameboard.placeShip(ship2, 0, 0)
    expect(gameboard.placeShip(ship1,0,0)).not.toBeTruthy();
})

test("Can't place ships if board ends", ()=>{
    expect(gameboard.placeShip(ship1, 9, 0)).not.toBeTruthy();
})

test("receiveAttack reads if a ship was hit", ()=>{
    gameboard.placeShip(ship1,0,0);
    gameboard.recieveAttack(0,0);
    expect(ship1.hits).toBe(1);
})

test("receiveAttack reads a missed shot", ()=>{
    gameboard.placeShip(ship1,0,0);
    gameboard.recieveAttack(0,4);
    expect(gameboard.board[0][4]).toBe("missedShot");
})

test("board report all ships sunk", ()=>{
    gameboard.placeShip(ship1,0,0);
    gameboard.recieveAttack(0,0);
    gameboard.recieveAttack(1,0);
    gameboard.recieveAttack(2,0);
    gameboard.recieveAttack(3,0);
    ship1.isSunk();
    expect(gameboard.allShipsSunk()).toBeTruthy();
})