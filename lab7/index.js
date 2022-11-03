const h2 = document.querySelector('h2')

h2.addEventListener("click", () => {
    if (h2.style.color === "white") {
        h2.style.color = "black"
    } else {
        h2.style.color = "white"
    }

    if (h2.style.backgroundColor === "blue") {
        h2.style.backgroundColor = "yellow"
    } else {
        h2.style.backgroundColor = "blue"
    }
})

const p = document.querySelector('p')

p.addEventListener("click", () => {
    if (p.style.color === "red") {
        p.style.color = "white"
    } else {
        p.style.color = "red"
    }

    if (p.style.backgroundColor === "white") {
        p.style.backgroundColor = "green"
    } else {
        p.style.backgroundColor = "white"
    }
})

const div = document.getElementById('div')

div.addEventListener("click", () => {
    if (div.style.color === "white") {
        div.style.color = "black"
    } else {
        h2.style.color = "white"
    }

    if (div.style.backgroundColor === "blue") {
        div.style.backgroundColor = "yellow"
    } else {
        div.style.backgroundColor = "blue"
    }
})