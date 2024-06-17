const container = document.querySelector(".container");
const btnPopup = document.querySelector("button");
const popupBox = document.querySelector(".popup-box");
const input = document.querySelector("input");
const btnCancel = document.querySelector("#cancel");
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
        event.target.style.backgroundColor = getRandomColor();
    }))
};

//Create a button that pops a box up to prompt the user for a grid size.
btnPopup.addEventListener("click", function() {
    input.value = "";
    popupBox.style.visibility = "visible";
    input.focus();
});

//Close the pop-up when pressing cancel button.
btnCancel.addEventListener("click", function() {
        popupBox.style.visibility = "hidden";
        pixelNumber = 0;
});

//Validate that the input is a valid number when pressing Enter.
input.addEventListener("keydown", validateNumber);

//Create a function to validate that is a number <= 100;
function validateNumber(event) {
    if (event.key === "Enter") {
        pixelNumber = Number(event.target.value);
        if (!isNaN(pixelNumber) && pixelNumber <= 100) {
            deleteGrid();
            createGrid();
            popupBox.style.visibility = "hidden";
        }
        else {
            alert("Invalid input. Please enter a number less than 100.");
            input.value = "";
        }               
    };    
};

//Create a function to get a random color (RGB)
function getRandomColor(alpha) {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256); 
    return `rgba(${R}, ${G}, ${B})`;
};