import Player from "./Player"
test("computer generates random coordinates", ()=>{
    let computer = new Player();
    expect(computer.randomCoordinates()[0]).toBeLessThanOrEqual(9)
    expect(computer.randomCoordinates()[1]).toBeLessThanOrEqual(9)
})
