const container = document.querySelector(".container");
const btnPopup = document.querySelector("button");
const popupBox = document.querySelector(".popup-box");
let pixelNumber = 16;

//Create a 16x16 grid of square divs and a function to change the grid size.
const containerGrid = document.createElement("div");
containerGrid.classList.add("container-grid");

container.appendChild(containerGrid);
function createGrid() {
    for (let i = 0; i < pixelNumber; i++) {
        const containerHorizontal = document.createElement("div");
        containerHorizontal.classList.add("container-horizontal");
        containerGrid.appendChild(containerHorizontal);

        for (let j = 0; j < pixelNumber; j++) {
            const containerVertical = document.createElement("div");
            containerVertical.classList.add("container-vertical");
            containerHorizontal.appendChild(containerVertical);
        }
    }
}
createGrid();

// Change the color of the "pixel" when passing the mouse over it.
const pixelBoxes = document.querySelectorAll(".container-vertical");

pixelBoxes.forEach(pixelBox => 
    pixelBox.addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = "black";
}));

// Create a button that pops a box up to prompt the user for a grid size.
btnPopup.addEventListener("click", function() {
    popupBox.style.visibility = "visible";
    const btnCancel = document.querySelector("#cancel");
    btnCancel.addEventListener("click", function() {
        popupBox.style.visibility = "hidden";
        pixelNumber = 0;
        console.log(pixelNumber);
    });
    const input = document.querySelector("input");
    input.addEventListener("input", function(event) {
        pixelNumber = Number(event.target.value);
        input.addEventListener("keydown", function(event){
            if (event.key === "Enter") {
                createGrid();
                popupBox.style.visibility = "hidden";
                console.log(pixelNumber);
            };      
        });

        console.log(pixelNumber);
        console.log(typeof(pixelNumber));
    });
});



