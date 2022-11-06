interface FormValue2 {
    product: string
    price: number
    count: number
}

const getFormValues2 = (): FormValue2 => {
    const productEl = document.getElementById("product") as HTMLSelectElement
    const priceEl = document.getElementById("price") as HTMLInputElement
    const countEl = document.getElementById("count") as HTMLInputElement

    const product: string = productEl.value
    const price: number = Number(priceEl.value)
    const count: number = Number(countEl.value)

    return {
        product: product,
        price: price,
        count: count
    }
}
