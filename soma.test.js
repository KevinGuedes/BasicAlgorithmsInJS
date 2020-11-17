const {
    testIfPrime,
    getFibonacciElement,
    getGcd,
    getCount,
    getQuickSortedArray,
    getSumOfNumbers
} = require('./mathFunctions');

test("Checando se é primo", () =>{
    expect(testIfPrime(3)).toBe("Primo");
})




//npm test executa todos os arquivos com .test.js