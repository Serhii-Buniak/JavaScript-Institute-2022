function str_del() {
    selection = window.getSelection().toString()
    let str = document.getElementById("elem1").textContent

    let start = str.indexOf(selection)
    let end = start + selection.length
    let result = str.slice(0, start) + str.slice(end)

    document.getElementById("elem1").textContent = result
}

function str_del_sym() {
    let str = document.getElementById("elem2").textContent
    let result = str.slice(0, str.length - 1)

    document.getElementById("elem2").textContent = result
}

function getProperty(obj, prop) {
    return obj[prop]
}

function addProperty(obj, prop, value) {
    obj[prop] = value
}

function removeProperty(obj, prop) {
    delete obj[prop]
}

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}

function getLengthOfTwoWords(word) {
    return word.length
}

function isGreaterThan(first, second) {
    return first < second
}

function isEven(number) {
    return number % 2 === 0
}

function isSameLength(first, second) {
    return first.length === second.length
}

function isEvenAndGreaterThanTen(number) {
    return isEven(number) && isGreaterThan(10, number)
}

function computeAreaOfATriangle(height, basis) {
    return height * basis / 2
}