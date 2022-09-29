const computeAreaOfARectangle = (a, b) => {
    return a * b;
};
const computeAreaOfACircle = (r) => {
    return Math.PI * Math.pow(r, 2);
};
const computePower = (number, exponent) => {
    return Math.pow(number, exponent);
};
const computeSquareRoot = (number) => {
    return Math.sqrt(number);
};
const getLengthOfThreeWords = (...words) => {
    return words.reduce((prev, curr) => prev + curr).length;
};
const joinArrays = (arr1, arr2) => {
    return arr1.concat(arr2);
};
const getProductOfAllEIementsAtProperty = (obj, key) => {
    const value = obj[key];
    if (!Array.isArray(value)) {
        return 0;
    }
    if (value.length === 0) {
        return 0;
    }
    return value.reduce((prev, curr) => prev * curr);
};
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
const findShortestWordAmongMixedElements = (arr) => {
    let strings = arr.filter(str => isString(str));
    if (strings.length === 0) {
        return "";
    }
    return strings.find((str1, i, arr) => undefined === arr.find(str2 => str1.length > str2.length));
};
const findSmallestNumberAmongMixedElements = (arr) => {
    let numbers = arr.filter(el => Number.isInteger(el));
    if (numbers.length === 0) {
        return "";
    }
    return numbers.find((num1, i, arr) => undefined === arr.find(num2 => num1 > num2));
};
const modulo = (number, divider) => {
    const res = number / divider;
    return number - Math.trunc(res) * divider;
};
const invert = (str, number = str.length) => {
    let charArr = str.split("");
    const subStrings = [[]];
    for (let i = 0, j = 0; i < charArr.length; i++) {
        subStrings[j].push(charArr[i]);
        if (subStrings[j].length === number) {
            j++;
            if (i !== charArr.length - 1) {
                subStrings.push([]);
            }
        }
    }
    return subStrings.map(arr => arr.reverse().join("")).join("");
};
const detectOutlierValue = (str) => {
    const strArr = str.split(" ");
    const numArr = strArr.map(s => Number(s));
    const evenArr = numArr.filter(n => n % 2 === 0);
    const oddArr = numArr.filter(n => n % 2 !== 0);
    if (evenArr.length === 1 && oddArr.length !== 1) {
        return evenArr[0];
    }
    if (evenArr.length !== 1 && oddArr.length === 1) {
        return oddArr[0];
    }
    return null;
};
const findPairForSum = (numbers, sum) => {
    for (let i = 0; i < numbers.length; i++) {
        const tempArr = numbers.filter((n, index) => index !== i);
        for (let j = 0; j < tempArr.length; j++) {
            if ((numbers[i] + tempArr[j]) === sum) {
                return [numbers[i], tempArr[j]];
            }
        }
    }
    return null;
};
const isReverted = (text, revertedText) => {
    const unRevertedText = revertedText.split("").reverse().join("");
    return text === unRevertedText;
};
function search(list, value) {
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle = 0;
    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] == value) {
            found = true;
            position = middle;
        }
        else if (list[middle] > value) { //if in lower half
            last = middle - 1;
        }
        else {
            first = middle + 1;
        }
    }
    return position;
}
const isIsogram = (text) => {
    const charArr = text.split("");
    for (let i = 0; i < charArr.length; i++) {
        const tempArr = charArr.filter((n, index) => index !== i);
        for (let j = 0; j < tempArr.length; j++) {
            if (charArr[i] === tempArr[j]) {
                return false;
            }
        }
    }
    return true;
};
const isPalindrome = (text) => {
    const revertedText = text.split("").reverse().join("");
    return text === revertedText;
};
