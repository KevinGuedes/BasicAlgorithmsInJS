function troca(vetor, indexEsquerda, indexDireita) {
    var temp = vetor[indexEsquerda];
    vetor[indexEsquerda] = vetor[indexDireita];
    vetor[indexDireita] = temp;
}

function particao(vetor, ponteiroEsquerda, ponteiroDireita) {
    var meio = vetor[Math.floor((ponteiroDireita + ponteiroEsquerda) / 2)];
    var i = ponteiroEsquerda;
    var j = ponteiroDireita;

    while (i <= j) {

        while (vetor[i] < meio) {
            i++
        }
        while (vetor[j] > meio) {
            j--;
        }

        if (i <= j) {
            troca(vetor, i, j);
            i++;
            j--;
        }
    }

    return i;
}


function quickSort(vetor, ponteiroEsquerda, ponteiroDireita) {
    var index;
    if (vetor.length > 1) {

        index = particao(vetor, ponteiroEsquerda, ponteiroDireita);

        if (ponteiroEsquerda < index - 1) {
            quickSort(vetor, ponteiroEsquerda, index - 1);
        }

        if (index < ponteiroDireita) {
            quickSort(vetor, index, ponteiroDireita);
        }
    }

    return vetor;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var vetor = new Array(10);
for (var i = 0; i < vetor.length; i++) {
    vetor[i] = getRndInteger(0, 50);
}

console.log(`Vetor original: [${vetor}]`);
console.log(`Vetor ordenado: [${quickSort(vetor, 0, vetor.length - 1)}]`);


