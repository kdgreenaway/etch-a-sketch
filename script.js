
const container = document.querySelector("#container")
const row = document.createElement("div")
// const square = Number(prompt("How wide?"))
const newGrid = document.querySelector("#newGrid")
const toggle = document.querySelector("#toggle")

newGrid.addEventListener("click", () => {
    container.textContent = " "
    createNewGrid()
})

toggle.addEventListener("click", () => {
    if (toggle.style.backgroundColor = "black") {
        randomColor()
    }

    else if (toggle.style.backgroundColor = randomColor()) {
        toggle.style.backgroundColor = "black"
    }
})

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    let color = "rgb(" + r + ", " + g + ", " + b + ")"
    return color
}

function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const row = document.createElement("div")
        row.classList.add("cell")
        // row.textContent = "i"
        
        row.style.flexBasis = "6.25%"
        container.appendChild(row)
    }
    const grid = document.querySelectorAll(".cell")
    grid.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "black"
    })
})
}

createGrid()

function createNewGrid() {
    const square = Number(prompt("Grid size"))
    for (let i = 0; i < square * square; i++) {
        const row = document.createElement("div")
        row.classList.add("cell")
            container.appendChild(row)
    }
    dynamicGrid()
    function dynamicGrid() {
        const divs = document.querySelectorAll(".cell")
        
        divs.forEach(div => {
            div.style.flexBasis = `calc(100% / (${square})`;
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = randomColor()
            })
        })
    }
}
// createNewGrid()

// function dynamicGrid() {
//     const divs = document.querySelectorAll(".cell")
    
//     divs.forEach(div => {
//         div.style.flexBasis = `calc(100% / (${square})`
//         div.addEventListener("mouseenter", () => {
//             div.style.backgroundColor = randomColor()
//         })
//     })
// }


