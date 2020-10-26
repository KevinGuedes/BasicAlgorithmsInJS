function fibonacciRecursive(n) {
	if (n < 2) {
		return n;
	}
	else {
		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
	}
}


function fibonacci(n) {
	var i = 0, j = 1, t;
	for (var k = 1; k < n; k++) {
		t = i + j;
		i = j;
		j = t;
	}
	return i;
}