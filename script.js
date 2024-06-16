const container = document.querySelector(".container");
const btnPopup = document.querySelector("button");
const popupBox = document.querySelector(".popup-box");
let pixelNumber = "";

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

btnPopup.addEventListener("click", function() {
    popupBox.style.visibility = "visible";
    const btnCancel = document.querySelector("#cancel");
    btnCancel.addEventListener("click", function() {
        popupBox.style.visibility = "hidden";
        pixelNumber = "";
        console.log(pixelNumber);
    });
    const input = document.querySelector("input");
    input.addEventListener("input", function(event) {
        pixelNumber = event.target.value;
        input.addEventListener("keydown", function(event){
            if (event.key === "Enter") {
                popupBox.style.visibility = "hidden";
                console.log(pixelNumber);
            };      
        });

        console.log(pixelNumber);
    });
});



