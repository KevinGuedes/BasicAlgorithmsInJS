const arrayToString = (arr) => {
	sequence = "";
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1) {
			sequence += `${arr[i]} `;
		}
		else {
			sequence += `${arr[i]}`;
		}
	}
	return sequence;
}


const fibonacci = (n) => {
	let arr = [0, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return arr;
}


console.log(" ");
console.log("Primeira sequência: ")
var firstSequence = fibonacci(10);
console.log(arrayToString(firstSequence));


console.log(" ");
console.log("Sequência modificada")
var modifiedSequence = fibonacci(10);
console.log(arrayToString(modifiedSequence));


console.log(" ");
console.log("Sequência crescente")
const init = 5;
const end = 10;
for (let i = init; i < end; i++) {
	var ithSequence = fibonacci(i);
	console.log(`Sequência #${i}: ${arrayToString(ithSequence)}`);
}