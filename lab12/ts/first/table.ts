

const calculateBtnEl = document.getElementById("calculate") as HTMLButtonElement
const tableFunctionEl = document.getElementById("table-function")
const tBody = document.getElementById("table-body")

calculateBtnEl.addEventListener("click", (e) => {
    e.preventDefault()
    tBody.innerHTML = ""

    const { start, end, step, triangleFx } = getFormValues()
    tableFunctionEl.innerHTML = triangleFx
    for (let degrees = start; degrees <= end; degrees += step) {

        const radians = toRadians(degrees)
        let functionResult: number;

        switch (triangleFx) {
            case TriangleFunction.Sin:
                functionResult = Math.sin(radians)
                break;

            case TriangleFunction.Cos:
                functionResult = Math.cos(radians)
                break;

            default:
                throw new Error("not TriangleFunction")
        }

        const tr = document.createElement("tr")
        const tdDegree = document.createElement("td")
        const tdRadian = document.createElement("td")
        const tdFunction = document.createElement("td")

        tdDegree.innerText = degrees.toString()
        tdRadian.innerText = radians.toString()
        tdFunction.innerText = functionResult.toString()

        tr.appendChild(tdDegree)
        tr.appendChild(tdRadian)
        tr.appendChild(tdFunction)

        tBody.appendChild(tr)
    }
})

const toRadians = function (degrees: number) {
    if (degrees < 0) {
        degrees += 360;/*from w  w  w .  java2 s.c o m*/
    }
    return degrees / 180 * Math.PI;
}
