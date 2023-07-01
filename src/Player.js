import Gameboard from "./Gameboard";


export default class Player{
    constructor(){
    }

    randomTurn(gameboard){
        let coords = this.randomCoordinates();
        gameboard.recieveAttack(coords[0],coords[1]);
    }
    randomCoordinates(){
        let xCoord = Math.floor((Math.random()*9)+1)
        let yCoord = Math.floor((Math.random()*9)+1)
        return [xCoord, yCoord]
    }
}