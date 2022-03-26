"use strict";

const validateBrackets = require('../stackBrackets');

describe('brackets tests', () => {

    it("open brackets and cloing are balanced", () => {
        let test = validateBrackets('{}')

        expect(test).toBe(true);
    });
    it(" brackets in the string are balanced", () => {
        let test = validateBrackets('{}(){}')

        expect(test).toBe(true);
    });
    it(" brackets in the string are balanced", () => {
        let test = validateBrackets('()[[Extra Characters]]')

        expect(test).toBe(true);
    });
    it(" brackets in the string are balanced", () => {
        let test = validateBrackets('(){}[[]]')

        expect(test).toBe(true);
    });


    it(" brackets in the string are balanced", () => {
        let test = validateBrackets('{}{Code}[Fellows](())')

        expect(test).toBe(true);
    });
    it(" brackets in the string are not balanced", () => {
        let test = validateBrackets('[({}]')

        expect(test).toBe(false);
    });
    it(" brackets in the string are not balanced", () => {
        let test = validateBrackets('(](')

        expect(test).toBe(false);
    });
    it("open One", () => {
        let test = validateBrackets('{')

        expect(test).toBe(false);
    });
    it("closing One", () => {
        let test = validateBrackets(')')

        expect(test).toBe(false);
    });
    
})
