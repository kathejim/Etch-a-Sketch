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

