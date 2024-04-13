/**
 * Adding two arrays of equal length,
 * summing each element of the first with
 * the corresponding element in the second
 *
 * @param {number[]} arr1 - First array of numbers
 * @param {number[]} arr2 - Second array of numbers
 * @throws {error} Two arrays have to be the same length
 * @returns {number[]} newArr - New array of numbers containing sum of corresponding elements
 */

export function addArrays(arr1, arr2) {
    let newArr = [];

    if (arr1.length !== arr2.length) {
        throw new Error(`Arrays don't have the same length`);
    }

    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i] + arr2[i]);
    }
    return newArr;
}

console.log(addArrays([1, 2], [4, 5])); // => [5,7]
console.log(addArrays([1, 2, 3], [4, 5])); // => Error
