function str_del() {
    selection = window.getSelection().toString()
    let str = document.getElementById("elem").textContent

    let start = str.indexOf(selection)
    let end = start + selection.length
    let result = str.slice(0, start) + str.slice(end)

    document.getElementById("elem").textContent = result
}