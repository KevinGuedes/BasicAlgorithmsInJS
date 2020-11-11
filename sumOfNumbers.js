var quantity = 3;
var group = new Array(quantity);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (var i = 0; i < group.length; i++) {
    group[i] = getRndInteger(0, 50);
};

console.log(group);


const getSum = (arr) => {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};

console.log(`Somatório = ${getSum(group)}`);
