var numofSquares = 6;
var colors = [];
var thePickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode buttons event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; ++i) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numofSquares = 3: numofSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; ++i) {
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if (clickedColor === thePickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = thePickedColor;
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}



function reset() {
  // generate all new colors
  colors = generateRandomColors(numofSquares);
  // pick new random color from array
  thePickedColor = pickColor();
  // change colorDisplay to match pickedColor
  colorDisplay.textContent = thePickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  // change colors of squares
  for (var i = 0; i < squares.length; ++i) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

for (var i = 0; i < squares.length; ++i) {
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    // compare color to picked color
    if (clickedColor === thePickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = thePickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColors(color){
  // loop through all squares
  for (var i = 0; i < squares.length; ++i) {
    squares[i].style.backgroundColor = color;
  }
  // change each color to match given color
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(number) {
  // make an array
  var arr = [];
  // repeat number times
  for (var i = 0; i < number; ++i) {
    arr.push(randomColor());
    // get random color and push into arr
  }
  // return the array
  return arr;
}

function randomColor() {
  // make a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // make a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // make a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
