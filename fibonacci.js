function fibonacciRecursive(n) {
	if (n < 2) {
		return n;
	}
	else {
		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
	}
}

var n = 10;
var serie = "";
console.log(`Apresentação dos ${n} primeiros termo(s) da série de Fibonacci (Abordagem Recursiva):`)
for (var i = 0; i < n; i++) {
	serie += `${fibonacciRecursive(i)} `;
}
console.log(serie)



function fibonacci(n) {
	var i = 0, j = 1, t;
	for (var k = 1; k < n; k++) {
		t = i + j;
		i = j;
		j = t;
	}
	return i;
}

var n = 5;
var serie = "";
console.log(`Apresentação dos ${n} primeiros termo(s) da série de Fibonacci (Abordagem Iterativa):`)
for (var i = 1; i <= n; i++) {
	serie += `${fibonacci(i)} `;
}
console.log(serie)

