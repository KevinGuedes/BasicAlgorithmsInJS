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
function getQuickSortedArray(inputArray) {
    var arr = inputArray.slice();
	if (arr.length <= 1) { 
		return arr;
    } 
    else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = arr.pop();
		var length = arr.length;

		for (var i = 0; i < length; i++) {
			if (arr[i] <= pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return newArray.concat(getQuickSortedArray(left), pivot, getQuickSortedArray(right));
	}
}

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