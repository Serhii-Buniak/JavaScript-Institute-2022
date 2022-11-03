const button = document.getElementById("button")
const form = document.getElementById("form")

const furnitureError = document.querySelector(".furniture-error")
const treeError = document.querySelector(".tree-error")
const countError = document.querySelector(".count-error")

button.addEventListener("click", (event) => {
    event.preventDefault()

    const formFields = {
        furniture: form.elements["furniture"].value,
        tree: form.elements["tree"].value,
        count: form.elements["count"].value,
    }

    const errors = {
        furniture: [],
        tree: [],
        count: []
    }

    if (!formFields.furniture) {
        errors.furniture.push("Поле обов'язкове")
    }

    if (!formFields.tree) {
        errors.tree.push("Поле обов'язкове")
    }

    if (!formFields.count) {
        errors.count.push("Поле обов'язкове")
    } else {
        if (!Number.isInteger(Number(formFields.count))) {
            errors.count.push("Це не число")
        }
    }

    if (hasError(errors)) {
        furnitureError.textContent = errors.furniture.join(". ")
        treeError.textContent = errors.tree.join(". ")
        countError.textContent = errors.count.join(". ")
        return
    }

    furnitureError.textContent = null
    treeError.textContent = null
    countError.textContent = null
    alert(JSON.stringify(formFields))
})

function hasError(errors) {
    for (const key in errors) {
        if (errors[key].length !== 0) {
            return true
        }
    }
    return false
}