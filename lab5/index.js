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
