const {
    testIfPrime,
} = require('./mathFunctions');


test("Validando input correto", () => {
    //Arrange
    const numberToTest = 3;
    const expected = true;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})



test("Validando número menor que zero", () => {
    //Arrange
    const numberToTest = -3;
    const expected = false;

    //Action
    const actual = testIfPrime(numberToTest);

    //Test
    expect(actual).toBe(expected);
})
