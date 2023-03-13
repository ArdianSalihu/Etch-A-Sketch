document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    let popup = document.querySelector("#popup");
    popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    });

});


function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let divNum = size * size
    
    for (let i = 0; i < divNum; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
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