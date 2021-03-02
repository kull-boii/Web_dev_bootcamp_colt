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

// 10] Set is useful to remove duplicate elements
let mySet = new Set().add(1).add(2).add(3);
console.log(mySet);
mySet.add(4);
mySet.add(1);
console.log(mySet.size, mySet); // do remember its size and not length of Set

// 11] Array.from()
// The Array.from method creates a new array from an array-like structure:
let dupeArray = [3, 2, 3, 3, 5, 2];
let uniqueArray = Array.from(new Set(dupeArray)); // turns set into array
console.log(uniqueArray);

// 12] preference
// https://dev.to/coderslang/js-test-3-adding-strings-to-numbers-and-booleans-3l2o
console.log("2" - 9); // -7
console.log("2" + 9); // "29"
console.log(2 - true); // 1
console.log(2 + true); // 3

// 13] check if the given variable is array
Array.isArray(nums) ? console.log(true) : console.log(false);
// or
nums instanceof Array ? console.log(true) : console.log(false);

// 14] Array.findIndex
const num = array.findIndex((a) => a === 2); // returns the index where the condtion will be true

// 15] Array.filter will return an array of items that meet the given condition.
// It takes a callback function that returns a given condition.filter returns a new array.;
const numArray = array.filter((a) => a === 2); // returns [2]

// 16]  Array.map returns a new array which transforms the existing array’s element by calling the mapFunction .
// mapFunction takes one argument, which is the array element.
let arr = [1, 2, 3, 4];
const newArr = arr.map((a) => a * 2);
console.log(newArr); // [2,4,6,8]

// 17] FilterMap
// filterMap is better than using two function calls of map and filter separately
// because you would need to go through the array twice.From the perspective of functional programming,
const filterMap = (checker, mapper, list) =>
  list.reduce(
    (acc, current) =>
      checker(current) ? acc.push(mapper(current)) && acc : acc,
    []
  );

const subjects = ["React", "Nodejs"];
const checker = (a) => a.length > 2;
const upper = (a) => a.toUpperCase();

filterMap(checker, upper, subjects); // ["REACT", "NODEJS"]

