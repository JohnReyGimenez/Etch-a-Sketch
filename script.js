document.addEventListener("DOMContentLoaded", function(){ 
    createContainer(16);

    let select = document.querySelector(".select");
    select.addEventListener("click", function() {
        let size = getSize();
        createContainer(size)
    })
});


function createContainer(size) {
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size

    for (i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "black"
        })

        container.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Size of squares: 1 - 100");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "PUT A NUMBER BROO";
    }

    else if (input < 0 || input > 100) {
        message.innerHTML = "READ BRO DAMN ITS 1 - 100";
    }
    else {
        message.innerHTML = "";
        return input;
    }
}