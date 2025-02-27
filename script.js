console.log("test")

const container = document.querySelector("#container")
let yAxis = Number(prompt("How high?"))
let xAxis = Number(prompt("How wide?"))

function createGrid(numberOfRows, columns) {
    console.log(yAxis, xAxis)
    
    for (i = 0; i < numberOfRows; i++) {
        const row = document.createElement("div")
        row.textContent = "Hi";
            container.appendChild(row)
        for (j = 0; j < columns; j++) {
            const column = document.createElement("div")
            column.textContent = "Hello"
            dynamicGrid()
            container.appendChild(column)
        }
    }
    
}

createGrid(yAxis, xAxis)

function dynamicGrid() {
    const divs = document.querySelectorAll("div")
    let flexBasis = (100 / (xAxis + 1))
    let roundedFlex = Math.round(flexBasis * 100) / 100 + "%"
    console.log(roundedFlex)

    divs.forEach(div => {
        div.style.flexBasis = roundedFlex
        div.style.color = "green"
    })
}


