import gameLoop from ".";
export default function endGame(){
    const title = document.getElementById("title");
    title.textContent="You Win!"
    const body = document.querySelector('body')
    const boards = document.querySelector(".boards")
    const userBoard = document.querySelector(".playerBoard")
    const compBoard = document.querySelector(".computerBoard")
    boards.removeChild(userBoard)
    boards.removeChild(compBoard)
    const playAgain = document.createElement("button");
    playAgain.textContent= "Play Again?"
    body.appendChild(playAgain)
    playAgain.addEventListener("click", ()=>{
        body.removeChild(playAgain)
        title.textContent="Battle Ship"
       gameLoop();
    })
    
}