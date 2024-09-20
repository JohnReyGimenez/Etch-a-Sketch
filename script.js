let color = "black";
let draw = false;

document.addEventListener("DOMContentLoaded", function() { 
    createContainer(16);

    // Select size button
    let select = document.querySelector(".select");
    select.addEventListener("click", function() {
        let size = getSize();
        if(size) {
            createContainer(size);
        }
    });

    // Color selection buttons
    document.querySelector(".black").addEventListener("click", function() {
        setColor('black');
    });

    document.querySelector(".random").addEventListener("click", function() {
        setColor('random');
    });

    // Reset button
    document.querySelector(".reset").addEventListener("click", resetContainer);

    // Draw mode button
    document.querySelector(".draw").addEventListener("click", function() {
        draw = !draw;
        this.textContent = draw ? "Switch to Hover Mode" : "Switch to Draw Mode"; 
    });
});

function createContainer(size) {
    let container = document.querySelector(".container");

    container.innerHTML = ''; // Clear the existing grid

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");

        // Only color on mouseover if draw mode is off
        div.addEventListener("mouseover", function() {
            if (!draw) {
                colorDiv.call(this);
            }
        });

        // Only color on click if draw mode is on
        div.addEventListener("click", function() {
            if (draw) {
                colorDiv.call(this);
            }
        });

        container.appendChild(div); 
    }
}

function getSize() {
    let input = prompt("Size of squares: 1 - 100");
    let message = document.querySelector("#message");

    if (input === "") {
        message.innerHTML = "PUT A NUMBER BROO";
        return null;
    }

    let size = parseInt(input);

    if (isNaN(size) || size < 1 || size > 100) {
        message.innerHTML = "READ BRO DAMN ITS 1 - 100";
        return null;
    } else {
        message.innerHTML = "";
        return size;
    }
}

function colorDiv() {
    // Color the div based on the current color mode
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetContainer() {
    let divs = document.querySelectorAll(".container div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}
