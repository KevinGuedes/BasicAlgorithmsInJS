//Algoritmo para identificar números Primos

//Processamento
function testIfPrime(n) {
    var quantity = 0;
    
    for(var i = 1; i <= n; i++){
        if(n % i == 0){
            quantity++;
        }
    }

    if(quantity == 2){
        return console.log("Primo");
    }
    else{
        return console.log("Não Primo");
    }
}

//Resposta
testIfPrime(3);