let color = "black"

document.addEventListener("DOMContentLoaded", function(){ 
    createContainer(16);

    let select = document.querySelector(".select");
    select.addEventListener("click", function() {
        let size = getSize();
        if(size) {
        createContainer(size)
        }
    })
});


function createContainer(size) {
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Size of squares: 1 - 100");
    let message = document.querySelector("#message");

    if (input == "") {
        message.innerHTML = "PUT A NUMBER BROO";
    }

    let size = parseInt(input);

    if (isNaN(size) || size < 1 || size > 100) {
        message.innerHTML = "READ BRO DAMN ITS 1 - 100";
    }
    else {
        message.innerHTML = "";
        return size;
    }
}

function colorDiv() {
    if (color == "random") {
        this.style.backroundColor = `hsl(${Math.random() * 360 }, 100%, 50%)`
    }
    else {
        this.style.backroundColor = "black"
    }
}


function setColor(colorChoice) {
    let color = colorChoice;
   
}