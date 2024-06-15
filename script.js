const container = document.querySelector(".container");

//Create a 16x16 grid of square divs.
const containerGrid = document.createElement("div");
containerGrid.classList.add("container-grid");

container.appendChild(containerGrid);
for (let i = 0; i < 16; i++) {
    const containerHorizontal = document.createElement("div");
    containerHorizontal.classList.add("container-horizontal");
    containerGrid.appendChild(containerHorizontal);

    for (let j = 0; j < 16; j++) {
        const containerVertical = document.createElement("div");
        containerVertical.classList.add("container-vertical");
        containerHorizontal.appendChild(containerVertical);
    }
}

// Change the color of the "pixel" when passing the mouse over it.
const pixelBoxes = document.querySelectorAll(".container-vertical");

pixelBoxes.forEach(pixelBox => 
    pixelBox.addEventListener("mouseenter", function(event) {
   event.target.style.backgroundColor = "black";
}));

