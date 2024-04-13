import { addArrays } from './my-solution.js';

describe('add two numbers from two arrays', () => {
    test('adds [1, 2], [4, 5] to equal [5, 7]', () => {
        expect(addArrays([1, 2], [4, 5])).toEqual([5, 7]);
    });
    test('adds [1, 2, 3], [3, 2, 1] to equal [4, 4, 4]', () => {
        expect(addArrays([1, 2, 3], [3, 2, 1])).toEqual([4, 4, 4]);
    });
    test('adds [10, 2], [48, 5, 7] to equal [Error]', () => {
        expect(() => addArrays([10, 2], [48, 5, 7])).toThrow(Error);
    });
    test('adds [-10, 2], [-2, 3] to equal [-12, 5]', () => {
        expect(addArrays([-10, 2], [-2, 3])).toEqual([-12, 5]);
    });
});
