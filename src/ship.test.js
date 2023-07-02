import Ship from "./ship";
let ship1;
beforeEach(()=>{
    ship1 = new Ship(4);
})

test("isSunk method and (therefore) Hit method working", ()=>{
    ship1.hit()
    ship1.hit()
    ship1.hit()
    ship1.hit()
    ship1.isSunk()
    expect(ship1.sunk).toBeTruthy()
})

test("changeDirection works", ()=>{
    ship1.changeDirection();
    expect(ship1.direction).toBe("horizontal")
})