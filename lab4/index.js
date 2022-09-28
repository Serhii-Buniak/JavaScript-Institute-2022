function findMinLengthOfThreeWords(first, second, third) {
    var array = [first, second, third];
    return getLengthOfShortestElement.apply(void 0, array);
}
function filterOddElements() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.filter(function (n) { return n % 2 !== 0; });
}
function getLengthOfShortestElement() {
    var _a;
    var words = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        words[_i] = arguments[_i];
    }
    return (_a = words
        .find(function (str, i, arr) {
        return undefined === arr.find(function (str2) { return str.length > str2.length; });
    })) === null || _a === void 0 ? void 0 : _a.length;
}
function joinArrayOfArrays(numbers, booleans, strings) {
    var arrayOfAny = [];
    return arrayOfAny.concat(numbers, booleans, strings);
}
function findSmallestNumberAmongMixedElements(numbers) {
    var onlyNumbers = numbers.filter(function (n) { return Number.isInteger(n); });
    if (onlyNumbers.length === 0) {
        return 0;
    }
    return onlyNumbers
        .find(function (n1, i, arr) {
        return undefined === arr.find(function (n2) { return n1 > n2; });
    });
}
function computeSummationToN(number) {
    var sum = 0;
    for (var index = 1; index <= number; index++) {
        sum += index;
    }
    return sum;
}
function convertScoreToGrade(number) {
    if (0 <= number && number <= 34) {
        return 'F';
    }
    if (35 <= number && number <= 59) {
        return 'Fx';
    }
    if (60 <= number && number <= 68) {
        return 'E';
    }
    if (69 <= number && number <= 74) {
        return 'D';
    }
    if (75 <= number && number <= 81) {
        return 'C';
    }
    if (82 <= number && number <= 89) {
        return 'B';
    }
    if (90 <= number && number <= 100) {
        return 'A';
    }
    throw new Error('INVALID SCORE');
}
function getLongestOfThreeWords(first, second, third) {
    var array = [first, second, third];
    return getLengthOfLongestElement.apply(void 0, array);
}
function getLengthOfLongestElement() {
    var _a;
    var words = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        words[_i] = arguments[_i];
    }
    return (_a = words
        .find(function (str, i, arr) {
        return undefined === arr.find(function (str2) { return str.length < str2.length; });
    })) === null || _a === void 0 ? void 0 : _a.length;
}
function multiply(num1, num2) {
    var sum = 0;
    var num1Abs = Math.abs(num1);
    var num2Abs = Math.abs(num2);
    for (var index = 0; index < num2Abs; index++) {
        sum += num1Abs;
    }
    if ((num1 < 0 && num2 >= 0) || (num2 < 0 && num1 >= 0)) {
        sum = -sum;
    }
    return sum;
}
function computeSumBetween(from, to) {
    if (from > to) {
        return 0;
    }
    var sum = 0;
    for (var index = from; index < to; index++) {
        sum += index;
    }
    return sum;
}
