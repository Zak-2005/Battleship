import Gameboard from "./Gameboard";
export default class Player{
    constructor(){
        
    }

    playTurn(xCoord, yCoord, gameboard){
        gameboard.recieveAttack(xCoord,yCoord);
    }
    randomTurn(gameboard){
        let coords = randomCoordinates();
        gameboard.recieveAttack(coords[0],coords[1]);
    }
    randomCoordinates(){
        let xCoord = Math.floor((Math.random()*9)+1)
        let yCoord = Math.floor((Math.random()*9)+1)
        return [xCoord, yCoord]
    }
}