'use strict'

let QuickSort = require('../QuickSort');

describe('quick Sort sort Array test', () => {

    it('sorted from lowest to highest value', () => {
        let array = [7, 8, 4, 6, 2, 1, 5];
        let left = 0;
        let right = array.length - 1;
        QuickSort(array, left, right);
        expect(array).toEqual([1, 2, 4, 5, 6, 7, 8]);
    });
});