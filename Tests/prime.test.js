const {
    testIfPrime,
} = require('../mathFunctions');


test("Validando input correto e primo", () => {
    //Arrange
    const numberToTest = 3;
    const expected = true;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})


test("Validando input correto e não primo", () => {
    //Arrange
    const numberToTest = 4;
    const expected = false;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})


test("Validando número menor que 0", () => {
    //Arrange
    const numberToTest = -3;
    const expected = false;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})


test("Validando número igual a 0", () => {
    //Arrange
    const numberToTest = 0;
    const expected = false;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})


test("Validando número igual a 1", () => {
    //Arrange
    const numberToTest = 0;
    const expected = false;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})



