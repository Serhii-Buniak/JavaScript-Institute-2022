const first = document.getElementById("first")
first.addEventListener("click", () => {
    const isSelected = first.classList.contains("selected")
    if (isSelected) {
        first.classList.remove("selected")
        first.style.fontSize = "16px"
        first.style.color = null
        first.style.backgroundColor = null
    } else {
        first.classList.add("selected")
        first.style.fontSize = "56px"
        first.style.color = "white"
        first.style.backgroundColor = "blue"
    }
})

const second = document.getElementById("second")
second.addEventListener("mouseup", (event) => {
    second.style.backgroundColor = "green"
})

second.addEventListener("mousedown", (event) => {
    second.style.backgroundColor = "yellow"
})

second.addEventListener("mouseover", (event) => {
    second.style.backgroundColor = "green"
})

second.addEventListener("mouseleave", (event) => {
    second.style.backgroundColor = null
})

const third = document.getElementById("third")
third.addEventListener("mouseover", (event) => {
    third.style.backgroundColor = "red"
})

third.addEventListener("mouseleave", (event) => {
    third.style.backgroundColor = "lightblue"
})
