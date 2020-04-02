console.log("Inside index.js");

let gridContainer = document.querySelector(".grid-container");
let gridBox = document.createElement("div");
let canvasSize;

function validateInput(input) {
  // If they enter something that is not a number. If they press the esc key, it will return null, but since we are converting the prompt
  // response into a Number type it will convert null into 0 (zero)
  console.log("What is input:: " + input);
  if (isNaN(input) || input === 0) {
    return false;
  }
  // If they enter a number that is too big
  else if (input >= 1000) {
    return false;
  }
  // Input is correct
  else {
    return true;
  }
}


function newCanvasSize() {

  // Ask for user input and make sure that it is validated
  while (1) {
    canvasSize = Number(prompt("Enter amount of squares per side to make the new grid. Number cannot be greater than 1000", ""));

    if (validateInput(canvasSize)) {
      break;
    }
  }

  // Reset the grid since they will input new canvas size
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  createGrid(canvasSize);
}

function generateRandomColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
  // document.documentElement.style.setProperty("--randomBackgroundColor", randomColor);
}

function createGrid(canvasSize) {
  // If they do not input a canvas size the default is 16
  if (canvasSize === undefined || canvasSize === null) {
    canvasSize = 16;
  }

  // Create the grid
  for (let i = 0; i < (canvasSize * canvasSize); i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridContainer.appendChild(gridBox);
  }

  // Change the rowNum and colNum CSS variable
  document.documentElement.style.setProperty("--colNum", canvasSize);
  document.documentElement.style.setProperty("--rowNum", canvasSize);
}


// Here we using mouseover to hover over each box
function blackAndWhiteGrid() {

}
document.getElementById("grid-container").addEventListener("mouseover", function( event ) {
  // highlight the mouseenter target
  let color = generateRandomColor();
  console.log("What is color:: " + color);
  event.target.style.backgroundColor = "#" + color;
}, false);


// Creating the default grid
createGrid(canvasSize);
