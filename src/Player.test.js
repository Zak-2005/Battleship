import Player from "./Player"
import Gameboard from "./Gameboard";
test.only("computer generates valid random coordinates for attack", ()=>{
    let computer = new Player();
    let gameboard = new Gameboard();
    expect(computer.generateValidRandomAttackCoordinates(gameboard).length).toBe(100)
})
