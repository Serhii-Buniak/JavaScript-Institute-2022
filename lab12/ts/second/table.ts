const buttonEl = document.getElementById("calculate")
const tbody = document.getElementById("table-body")

const rows = tbody.getElementsByTagName("tr")

interface TableRow extends FormValue2 {
    total: number
}

const rowsRecord: Record<string, TableRow> = {}



buttonEl.addEventListener("click", (e) => {
    e.preventDefault()
    const { product, price, count } = getFormValues2()
})

