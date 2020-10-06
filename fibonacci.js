//Algoritmo para apresentar um determinado termo da série de Fibonacci

// Abordagem Recursiva
function fibonacciR(n){
	if(n < 2)
		{
			return n;
		}
	else 
		{
			return fibonacciR(n-1) + fibonacciR(n-2);
		}
}

//Apresentando os n primeiros termos (Abordagem Recursiva)
var n = 10;
var serie = "";
console.log(`Apresentação dos ${n} primeiros termo(s) da série de Fibonacci (Abordagem Recursiva):`)
for(var i = 0; i < n; i++){
    serie += `${fibonacciR(i)} `;
}
console.log(serie)



//Abordagem Iterativa
function fibonacciI(n){
		var i = 0, j = 1, t;
		for(var k = 1; k < n; k++)
			{
				t = i + j;
				i = j;
				j = t;
			} 
		return i;
}
//Apresentando os n primeiros termos (Abordagem Iterativa)
var n = 5;
var serie = "";
console.log(`Apresentação dos ${n} primeiros termo(s) da série de Fibonacci (Abordagem Iterativa):`)
for(var i = 1; i <= n; i++){
    serie += `${fibonacciI(i)} `;
}
console.log(serie)

