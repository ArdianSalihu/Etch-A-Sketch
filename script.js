document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    let popup = document.querySelector("#popup");
    popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    });

});


let color = "black";

function createBoard(size) {
    let board = document.querySelector(".board");
  
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    let divNum = size * size;
  
    for (let i = 0; i < divNum; i++) {
      let div = document.createElement("div");
  
      // add event listener to div elements
      div.addEventListener("mouseover", function () {
        if (color === "random") {
          // call colorRandom() function if color is set to "random"
          this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
          this.style.backgroundColor = color;
        }
      });
  
      board.insertAdjacentElement("beforeend", div);
    }
  }
  


function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

function  getSize () {
    let input = prompt("What size would you like ?: ");
    let message = document.querySelector(".message");
    if (input === "") {
        message.innerHTML = "Please provide a number";
    } 
    else if (input <= 0 || input > 100) {
        message.innerHTML = "Provide a number only between 1 and 100";
    } 
    else {
        message.innerHTML = "Now we can play!";
        return input;
    }
}