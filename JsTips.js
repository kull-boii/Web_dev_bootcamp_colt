// 1] Use a default value with the || operator
// ref : https://medium.com/dailyjs/use-const-and-make-your-javascript-code-better-aac4f3786ca1
const foo = something() || defaultValue;
// Beware that defaultValue will be used for any falsy value returned by something().

// 2] Use the ternary operator ? :
const foo = condition ? valueA : valueB;

// 3] Capitalize the first letter of a string
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
capitalize("manchekar");

// 4] // Calculate the number of days between two dates
const diffDays = (date, otherDate) =>
  Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
diffDays(new Date("2014-12-19"), new Date("2020-01-01"));
// Result: 1839

// 5] Check if an array contains any items
const isEmptyArr = (arr) => Array.isArray(arr) && arr.length === 0;
let arr = [];
console.log(isEmptyArr(arr)); // true
arr = [1, 2, 3, 4];
console.log(isEmptyArr(arr)); // false

// 6] Different ways of merging multiple arrays
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];
// Merge and remove the duplications
const merge = [...new Set(a.concat(b))];
// Or
const merge = [...new Set([...a, ...b])];

// 7] Sort an array containing numbers
const sort = (arr) => arr.sort((a, b) => a - b);

// 8] swap values of variable
[a, b] = [b, a];

// 9] A great way of shortening an array is by redefining its length property.
let array = [0, 1, 2, 3, 4, 5, 6, 6, 8, 9];
array.length = 4;
// Result: [0, 1, 2, 3]
