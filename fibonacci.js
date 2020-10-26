const printArray = (arr) => {
	sequence = "";
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1) {
			sequence += `${arr[i]} `;
		}
		else {
			sequence += `${arr[i]}`;
		}
	}
	console.log(sequence);
}


const fibonacci = (n) => {
	let arr = [0, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return arr;
}


console.log("Primeira sequência: ")
var firstSequence = fibonacci(10);
printArray(firstSequence);


console.log("Sequência modificada")
var modifiedSequence = fibonacci(10);
printArray(modifiedSequence);