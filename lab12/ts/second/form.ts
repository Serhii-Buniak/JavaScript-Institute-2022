interface FormValue2 {
    name: string
    price: number
    count: number
}

const getFormValues2 = (): FormValue2 => {
    const nameEl = document.getElementById("name") as HTMLSelectElement
    const priceEl = document.getElementById("price") as HTMLInputElement
    const countEl = document.getElementById("count") as HTMLInputElement

    const name: string = nameEl.value
    const price: number = Number(priceEl.value)
    const count: number = Number(countEl.value)

    return {
        name: name,
        price: price,
        count: count
    }
}
