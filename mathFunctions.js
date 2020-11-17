//Prime Number
const testIfPrime = (number) => {

    var count = 0;

    if (number === 1 || number === 0) {
        return false;
    }
    else if (Number.isNaN(number) || number < 0) {
        return false;
    }
    else {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        if (count === 2) {
            return true;
        }
        else {
            return false;
        }
    }
};


// Fibonacci
const getFibonacciElement = (elementNumber) => {

    let sequence = [0, 1];

    for (let i = 2; i < elementNumber; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1])
    }

    if (elementNumber <= 0) {
        return false;
    }
    else {
        return sequence[elementNumber - 1];
    }
};


//Greatest Common Divisor
const calculateGcd = (firstNumber, secondNumber) => {
    if (!secondNumber) {
        return firstNumber;
    }
    return calculateGcd(secondNumber, firstNumber % secondNumber);
};

const getGcd = (firstNumber, secondNumber) => {

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    }

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    }

    return calculateGcd(firstNumber, secondNumber);
};


//Count
const getCount = (number) => {

    var count = 0;

    if (number <= 0) {
        return false;
    }
    else if (!Number.isInteger(number)) {
        return false;
    }
    else {
        for (var i = 1; i <= number; i++) {
            count++;
        }
        return count;
    }
};



//Quicksort
const swap = (arr, leftIndex, rightIndex) => {

    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
};

const partition = (arr, leftPointer, rightPointer) => {

    var pivot = arr[Math.floor((rightPointer + leftPointer) / 2)];
    var i = leftPointer;
    var j = rightPointer;

    while (i <= j) {

        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    return i;
};


const getQuickSortedArray = (inputArray, leftPointer, rightPointer) => {

    var arr = inputArray.slice();
    var index;
    if (arr.length > 1) {

        index = partition(arr, leftPointer, rightPointer);

        if (leftPointer < index - 1) {
            getQuickSortedArray(arr, leftPointer, index - 1);
        }

        if (index < rightPointer) {
            getQuickSortedArray(arr, index, rightPointer);
        }
    }

    return arr;
};


//Sum of numbers
const getSumOfNumbers = (inputArray) => {
    var arr = inputArray.slice();
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};


module.exports = {
    testIfPrime,
    getFibonacciElement,
    getGcd,
    getCount,
    getQuickSortedArray,
    getSumOfNumbers
}