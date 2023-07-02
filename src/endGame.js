import gameLoop from ".";
export default function endGame(){
    const title = document.getElementById("title");
    title.textContent="You Win!"
    const body = document.querySelector('body')
    const boards = document.querySelector(".boards")
    const rotateShipButton = document.querySelector(".rotateShip");

    body.removeChild(rotateShipButton);
    body.removeChild(boards)
    const playAgain = document.createElement("button");
    playAgain.textContent= "Play Again?"
    playAgain.addEventListener("click", ()=>{
        body.removeChild(playAgain)
        title.textContent="Place Your Ships"
       gameLoop();
    })
    body.appendChild(playAgain)
}