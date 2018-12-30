function charToASCII(letter) {
    return letter.charCodeAt(0);
}

function asciiToBinary(number) {
    return +number.toString(2);
}

function padZero(num, length) {
    let array = num.toString().split('');
    if (length <= array.length) {
        throw new Error('length argument is smaller than number length');
    }
    while (array.length < length) {
        array.unshift('0');
    }

    return array.join('');
}

function stringSplit(string, num) {
    if (string.length % num !== 0) throw new Error('string does not split evenly');
    let array = [];
    let prev = 0;
    for (let i = num; i <=  string.length; i += num) {
        array.push(string.slice(prev, i));
        prev = i;
    }
    return array;
}

function xOR(wordA, wordB) {
    let aarray = wordA.split('').map((letter) => +letter);
    let barray = wordB.split('').map((letter) => +letter);
    const xORarray = aarray.map((num, index) => num ^ barray[index]);
    return xORarray.join('').toString();
}

function and(stringA, stringB) {
    let arrayA = stringA.split('').map((letter) => +letter);
    let arrayB = stringB.split('').map((letter) => +letter);
    const andArray = arrayA.map((num, index) => num & arrayB[index]);
    return andArray.join('').toString();
}

function or(stringA, stringB) {
    let arrayA = stringA.split('').map((letter) => +letter);
    let arrayB = stringB.split('').map((letter) => +letter);
    const orArray = arrayA.map((num, index) => num | arrayB[index]);
    return orArray.join('').toString();
}

function leftRotate(string, num) {
    if (num > string.length) throw new Error ('shift num greater than string length');
    return string.slice(num) + string.slice(0, num);
}

function not(string) {
    let array = string.split('').map((letter) => letter);
    return array.map(letter => {
        if(letter === '1') return '0';
        return '1';
    }).join('');
}

function binaryAddition(stringA, stringB) {
    const numA = parseInt(stringA, 2);
    const numB = parseInt(stringB, 2);
    let sum = (numA + numB).toString(2);
    const length = stringA.length;
    while (sum.length < length) {
        sum = '0' + sum;
    }
    return sum.length === length ? '1' + sum : sum;
}

function truncate(string, length) {
    while (string.length > length) {
        string = string.slice(1);
    }
    return string;
}

function binaryToHex(string) {
    if (typeof string !== 'string') string = string.toString();
    let decimal = parseInt(string, 2);
    return decimal.toString(16);
}

module.exports = {
    charToASCII,
    asciiToBinary,
    padZero,
    stringSplit,
    xOR,
    and,
    or,
    leftRotate,
    not,
    binaryAddition,
    truncate,
    binaryToHex
}