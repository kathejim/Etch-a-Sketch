const container = document.querySelector(".container");
const btnPopup = document.querySelector("button");
const popupBox = document.querySelector(".popup-box");
let pixelNumber = 16;
let pixelBoxes;

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
    pixelBoxes = document.querySelectorAll(".container-vertical");
    activateSketching();
}
createGrid();

//Create a function to delete the Grid.
function deleteGrid() {
    const containerHorizontal = document.querySelectorAll(".container-horizontal");
    containerHorizontal.forEach(container => container.remove());
};

//Create a function to activate the event listener that 
//changes the color of the "pixel" when passing the mouse over it.
function activateSketching() {
    pixelBoxes.forEach(pixelBox => 
    pixelBox.addEventListener("mouseenter", function(event) {
    event.target.style.backgroundColor = "black";
}))};

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
                popupBox.style.visibility = "hidden";
                deleteGrid();
                createGrid();
                console.log(pixelNumber);
            };      
        });

        console.log(pixelNumber);
        console.log(typeof(pixelNumber));
    });
});



