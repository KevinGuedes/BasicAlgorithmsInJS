const {
    getQuickSortedArray,
} = require('../mathFunctions');


test("Input correto", () => {
        //Arrange
        const arrayToTest = [-3, -4.3333, 1, 12, 1310, -0.00005, 3, -15];
        const expected = [-15, -4.3333, -3, -0.00005, 1, 3, 12, 1310];
    
        //Action
        const actual = getQuickSortedArray(arrayToTest);
        
        //Test
        // for(var i = 0; i < arrayToTest.length; i++){
        //     expect(actual[i]).toBe(expected[i]);
        // }
        expect(actual).toEqual(expected);
})
