export function generateVisuals() {
  const body = document.querySelector("body");

  const rotateShipButton = document.createElement("button");
  rotateShipButton.classList.add("rotateShip");
  rotateShipButton.textContent= "Rotate"
  body.appendChild(rotateShipButton);
  
  const boards = document.createElement("div");
  boards.classList.add("boards");

  const userSide = document.createElement("div")
  userSide.classList.add("userSide")

  const userBoardTitle = document.createElement("div");
  userBoardTitle.classList.add("boardTitle")
  userBoardTitle.textContent = "Your Board:"
  const userBoard = document.createElement("div");
  userBoard.classList.add("playerBoard");
  userSide.appendChild(userBoardTitle)
  userSide.appendChild(userBoard)
  
  const computerSide = document.createElement("div")
  computerSide.classList.add("userSide")
  
  const computerBoardTitle = document.createElement("div");
  const computerBoard = document.createElement("div");
  computerBoard.classList.add("computerBoard");
  computerBoardTitle.classList.add("boardTitle")
  computerBoardTitle.textContent = "Computer Board:"

  computerSide.appendChild(computerBoardTitle)
  computerSide.appendChild(computerBoard)

  boards.appendChild(userSide);
  boards.appendChild(computerSide);

  body.appendChild(boards)
}
