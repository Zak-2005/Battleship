import Player from "./Player";
import Gameboard from "./Gameboard";
import Ship from "./ship";

class Gameloop{
    constructor(){
        this.userGameboard = new Gameboard();
        this.computerGameboard = new Gameboard();
        this.User = new Player();
        this.Computer = new Player();
    }
    
}