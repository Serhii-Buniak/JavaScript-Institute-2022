const buttonEl = document.getElementById("calculate")
const totolSumEl = document.getElementById("total")
const tbody = document.getElementById("table-body")
const selectName = document.getElementById("name") as HTMLSelectElement

interface Dictionary<T> {
    [Key: string]: T;
}
interface ProductRow {
    name: HTMLTableCellElement
    price: HTMLTableCellElement
    count: HTMLTableCellElement
    sum: HTMLTableCellElement
}

interface TableRow extends FormValue2 {
    total: number
}

const productDict: Dictionary<ProductRow> = {}
const rows = tbody.getElementsByTagName("tr")

for (let index = 0; index < rows.length; index++) {
    const row = rows[index]
    const cells = row.getElementsByTagName("td")
    const nameValue: string = cells[0].innerText
    productDict[nameValue] = {
        name: cells[0],
        price: cells[1],
        count: cells[2],
        sum: cells[3],
    }
}

buttonEl.addEventListener("click", (e) => {
    e.preventDefault()
    const { name, price, count } = getFormValues2()

    productDict[name].price.innerText = price.toString()
    productDict[name].count.innerText = count.toString()
    productDict[name].sum.innerText = (price * count).toString()

    let sum = 0
    for (const key in productDict) {
        sum += +productDict[key].sum.innerText
        console.log(sum);
    }

    totolSumEl.innerText = sum.toString()
})

