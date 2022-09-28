function findMinLengthOfThreeWords(first: string, second: string, third: string) {
    const array: string[] = [first, second, third]
    return getLengthOfShortestElement(...array)
}

function filterOddElements(...numbers: number[]) {
    return numbers.filter(n => n % 2 !== 0)
}

function getLengthOfShortestElement(...words: string[]) {
    return words
        .find((str, i, arr) =>
            undefined === arr.find(str2 => str.length > str2.length)
        )?.length
}

function joinArrayOfArrays(numbers: number[], booleans: boolean[], strings: string[]) {
    const arrayOfAny: (number | boolean | string)[] = []
    return arrayOfAny.concat(numbers, booleans, strings)
}

function findSmallestNumberAmongMixedElements(numbers: number[]) {
    const onlyNumbers = numbers.filter(n => Number.isInteger(n))
    if (onlyNumbers.length === 0) {
        return 0
    }
    return onlyNumbers
        .find((n1, i, arr) =>
            undefined === arr.find(n2 => n1 > n2))
}

function computeSummationToN(number: number) {
    let sum: number = 0
    for (let index = 1; index <= number; index++) {
        sum += index
    }
    return sum
}

function convertScoreToGrade(number: number) {
    if (0 <= number && number <= 34) {
        return 'F'
    }
    if (35 <= number && number <= 59) {
        return 'Fx'
    }
    if (60 <= number && number <= 68) {
        return 'E'
    }
    if (69 <= number && number <= 74) {
        return 'D'
    }
    if (75 <= number && number <= 81) {
        return 'C'
    }
    if (82 <= number && number <= 89) {
        return 'B'
    }
    if (90 <= number && number <= 100) {
        return 'A'
    }

    throw new Error('INVALID SCORE')
}

function getLongestOfThreeWords(first: string, second: string, third: string) {
    const array: string[] = [first, second, third]
    return getLengthOfLongestElement(...array)
}

function getLengthOfLongestElement(...words: string[]) {
    return words
        .find((str, i, arr) =>
            undefined === arr.find(str2 => str.length < str2.length)
        )?.length
}

function multiply(num1: number, num2: number) {
    let sum = 0
    const num1Abs = Math.abs(num1)
    const num2Abs = Math.abs(num2)
    for (let index = 0; index < num2Abs; index++) {
        sum += num1Abs
    }
    if ((num1 < 0 && num2 >= 0) || (num2 < 0 && num1 >= 0)) {
        sum = -sum
    }
    return sum
}

function computeSumBetween(from: number, to: number) {
    if (from > to) {
        return 0
    }
    let sum = 0
    for (let index = from; index < to; index++) {
        sum += index
    }
    return sum
}