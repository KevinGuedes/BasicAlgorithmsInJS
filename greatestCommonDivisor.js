const gcdRecursive = (n1, n2) => {
    if (n1 < 0) {
        n1 = -n1;
    }

    if (n2 < 0) {
        n2 = -n2;
    }

    if (Number.isInteger(n1) && Number.isInteger(n2) && !(n1 === 0 && n2 === 0)) {
        if (!n2) {
            return n1;
        }
        return gcdRecursive(n2, n1 % n2);
    }

    return console.log("Parâmetros inválidos. Os dois devem ser inteiros e não podem ser ambos iguais a 0");
}

var n1 = 240, n2 = 160;
console.log(`O MDC de ${n1} e ${n2} é ${gcdRecursive(n1, n2)}`)


const gcd = (n1, n2) => {
    if (n1 < 0) {
        n1 = -n1;
    }
    if (n2 < 0) {
        n2 = -n2;
    }

    var maximoDivisor = -1;
    var maior = Math.max(n2, n1)
    var menor = Math.min(n2, n1)


    if (menor == 0) {
        return `O MDC de ${maior} e ${menor} é ${maior}`;
    }
    else {
        for (var i = 1; i <= menor; i++) {
            if ((maior % i == 0) && (menor % i == 0)) {
                maximoDivisor = i;
            }
        }
        return `O MDC de ${maior} e ${menor} é ${maximoDivisor}`;
    }


}

console.log(gcd(20, 50))
