function testIfPrime(n) {
    var quantity = 0;

    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            quantity++;
        }
    }

    if (quantity == 2) {
        return "Primo";
    }
    else {
        return "Não Primo";
    }
}

for(var i = 0; i < 10; i++){
    console.log(`${i} - ${testIfPrime(i)}`);
}