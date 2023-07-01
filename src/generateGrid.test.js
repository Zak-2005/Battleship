import generateGrid from "./generateGrids";
import Gameboard from "./Gameboard";
test("clicking cell attacks", ()=>{
    let gameboard = new Gameboard()
    renderAttack(0,1,gameboard)
    expect(gameboard.board[0][1]).toBe("missedShot")
})