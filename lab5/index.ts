const computeAreaOfARectangle = (a: number, b: number) => {
    return a * b
}

const computeAreaOfACircle = (r: number) => {
    return Math.PI * Math.pow(r, 2)
}

const computePower = (number: number, exponent: number) => {
    return Math.pow(number, exponent)
}

const computeSquareRoot = (number: number) => {
    return Math.sqrt(number)
}

const getLengthOfThreeWords = (...words: string[]) => {
    return words.reduce((prev, curr) => prev + curr).length
}

const joinArrays = <T>(arr1: T[], arr2: T[]): T[] => {
    return arr1.concat(arr2)
}

const getProductOfAllEIementsAtProperty = (obj: object, key: string) => {
    const value = obj[key]
    if (!Array.isArray(value)) {
        return 0
    }
    if (value.length === 0) {
        return 0
    }
    return value.reduce((prev, curr) => prev * curr)
}

function isString(value: any) {
    return typeof value === 'string' || value instanceof String;
}

const findShortestWordAmongMixedElements = (arr: string[]) => {
    let strings: string[] = arr.filter(str => isString(str))
    if (strings.length === 0) {
        return ""
    }
    return strings.find((str1, i, arr) =>
        undefined === arr.find(str2 => str1.length > str2.length))
}