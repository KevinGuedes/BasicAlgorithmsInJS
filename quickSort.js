function swap(arr, leftIndex, rightIndex) {
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}

function partition(arr, leftPointer, rightPointer) {
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
}


function getQuickSortedArray(arr, leftPointer, rightPointer) {
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
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var arr = new Array(10);
for (var i = 0; i < arr.length; i++) {
    arr[i] = getRndInteger(0, 50);
}

console.log(`Vetor original: [${arr}]`);
console.log(`Vetor ordenado: [${getQuickSortedArray(arr, 0, arr.length - 1)}]`);


