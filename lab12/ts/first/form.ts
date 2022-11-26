enum TriangleFunction {
    Sin = 'sin',
    Cos = 'cos',
}

interface FormValue {
    triangleFx: TriangleFunction
    start: number
    end: number
    step: number
}

const getFormValues = (): FormValue => {
    const triangleFxEl = document.getElementById("function") as HTMLSelectElement
    const startEl = document.getElementById("start") as HTMLInputElement
    const endEl = document.getElementById("end") as HTMLInputElement
    const stepEl = document.getElementById("step") as HTMLInputElement

    const triangleFx: TriangleFunction = triangleFxEl.value as TriangleFunction
    const start: number = Number(startEl.value)
    const end: number = Number(endEl.value)
    const step: number = Number(stepEl.value)

    return {
        triangleFx: triangleFx,
        start: start,
        end: end,
        step: step
    }
}