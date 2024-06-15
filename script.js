//Create a 16x16 grid of square divs.
const container = document.querySelector(".container");

const containerFlex = document.createElement("div");

container.appendChild(containerFlex);
for (let i = 0; i < 4; i++) {
    const containerHorizontal = document.createElement("div");
    containerHorizontal.classList.add("container-horizontal");
    containerFlex.appendChild(containerHorizontal);
    for (let j = 0; j < 4; j++) {
        const containerVertical = document.createElement("div");
        containerVertical.classList.add("container-vertical");
        containerHorizontal.appendChild(containerVertical);
    }
}

