//Algoritmo para fazer a soma de um conjunto de números

//Conjunto de números
var quantity = 3;
var group = new Array(quantity);

//Função para gerar números aleatórios inteiors entre os valores min e max, ambos inclusos
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Preenchimento aleatório do conjunto de números
for(var i = 0; i < group.length; i++){
     group[i] = getRndInteger(0, 50);
};

//Apresentação do vetor
console.log(group);

//Somatório dos valores do vetor
var sum = 0;
group.forEach(element => {
    sum += element;
});

//Apresentação do somatório
console.log(`Somatório = ${sum}`);
