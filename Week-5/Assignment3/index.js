/**
 * @desc Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
 * @details as we know Set constructor returns collections of unique values. Which is also iterable
 */

const hasDuplicate = (arr) => arr.length !== new Set(arr).size;

console.log(hasDuplicate([1, 2, 3, 3, 4, 5])); //true
console.log(hasDuplicate([1, 2, 3, 4, 5])); //false
