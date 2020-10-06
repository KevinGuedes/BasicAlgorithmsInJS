//Algoritmo para realizar ordenação Quick Sort de um vetor

//FUnção para trocar dois elementos de um vetor
function troca(vetor, indexEsquerda, indexDireita){
    var temp = vetor[indexEsquerda];
    vetor[indexEsquerda] = vetor[indexDireita];
    vetor[indexDireita] = temp;
}


//Processamento do método Quick Sort
function particao(vetor, ponteiroEsquerda, ponteiroDireita){
    var meio = vetor[Math.floor((ponteiroDireita+ponteiroEsquerda)/2)];
    var i = ponteiroEsquerda;
    var j = ponteiroDireita;

    while(i <= j){

        while(vetor[i] < meio){
            i++
        }
        while(vetor[j] > meio){
            j--;
        }

        if(i <= j){
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

//Função para gerar números aleatórios inteiors entre os valores min e max, ambos inclusos
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Preenchimento do vetor
var vetor = new Array(10);
for(var i = 0; i < vetor.length; i++){
    vetor[i] = getRndInteger(0, 50);
}

//Apresentação e ordenação (quickSort) do vetor
console.log(`Vetor original: [${vetor}]`);
console.log(`Vetor ordenado: [${quickSort(vetor, 0, vetor.length - 1)}]`);


