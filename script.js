
const container = document.querySelector("#container")
const newGrid = document.querySelector("#newGrid")
const toggle = document.querySelector("#toggle")
let isRandomColor = false;


function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let color = "rgb(" + r + ", " + g + ", " + b + ")"
    return color
}


function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.style.flexBasis = "6.25%"
        container.appendChild(cell)
    }
    updateEventListener()
}


function createNewGrid() {
    const square = Number(prompt("Grid size"))
    if (square <= 100) {
    for (let i = 0; i < square * square; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
            container.appendChild(cell)
    }
    

    function dynamicGrid() {
        const cells = document.querySelectorAll(".cell")
        
        cells.forEach(cell => {
            cell.style.flexBasis = `calc(100% / (${square})`;
            })
        }
    }

    else {
        alert("Choose any number up to 100")
        createNewGrid()
    }
    dynamicGrid()
    updateEventListener()
}


function handleMouseEnter(e) {
    if (isRandomColor) {
        e.target.style.backgroundColor = randomColor()
    }

    else {
        e.target.style.backgroundColor = "black"
    }
}

function updateEventListener() {
const cells = document.querySelectorAll(".cell")
cells.forEach (cell => {
    cell.removeEventListener("mouseenter", handleMouseEnter)
    cell.addEventListener("mouseenter", handleMouseEnter)
})
}

newGrid.addEventListener("click", () => {
    container.textContent = " "
    createNewGrid()
})

const cells = document.querySelectorAll(".cell")
toggle.textContent = "Black mode"
toggle.addEventListener("click", () => {
    isRandomColor = !isRandomColor
    toggle.textContent = isRandomColor ? "Color mode" : "Black mode"
    console.log(isRandomColor)
    updateEventListener()
})

createGrid()