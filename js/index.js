console.log("Inside index.js");

let gridContainer = document.querySelector(".grid-container");
let gridBox = document.createElement("div");

function createGrid() {

  for (let i = 0; i < 256; i++) {
    console.log("i:: " + i);
    let gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridContainer.appendChild(gridBox);
  }
}

document.getElementById("grid-container").addEventListener("mouseover", function( event ) {
  // highlight the mouseenter target
  event.target.style.backgroundColor = "red";
}, false);

createGrid();
