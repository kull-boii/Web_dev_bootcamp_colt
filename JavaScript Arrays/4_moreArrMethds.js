/* 

concat : merge arrays
includes : look for a value
indexOf : just like string indexOf
join : creates a string from an array 
reverse : reverses an array
slice : copies a portion on an array
splice : removes/replaces elements 
sort : sort an array 


*/

// The concat() method is used to merge two or more arrays. This method does not change the existin arrays
// but instead returns a new array

let cats = ["Blue", "Kitty"];

let dogs = ["russty", "wyatt"];

let comboParty = cats.concat(dogs); // [ 'Blue', 'Kitty', 'russty', 'wyatt' ]
console.log(comboParty);

// Includes
// returns true or false
const array1 = [1, 2, 3, "Aadi", "Manchekar"];
console.log(array1.includes("Aadi")); // true

console.log(comboParty.includes("Kitty")); // true

console.log(comboParty.indexOf("Kitty"));
// if -1 then not present

// Reverse method
const array = ["one", "two", "three"];
// note reverse is destructive -> it changes the original array
array.reverse();

console.log(array);

// slice in array
// returns a new array
const newArray = array.slice(1);
console.log(newArray);

// if we want last 2 elements then

const anotherArr = comboParty.slice(-2);

// SPLICE
// used to replace or insert an element
// syntax : arrDelItems = array.splice( start [,deleteCount [,item [,item2 ...]] ]);

const months = ["Jan", "March", "April", "June"];
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements

// if deleteCount = 0 then JS knows that we only have to insert element
months.splice(1, 0, "Feb");
console.log(months);

months.splice(4, 1, "May"); // here we are replacing June with May
console.log(months);

// sort
const mnth = ["March", "Jan", "Feb", "Dec"];
mnth.sort();
console.log(mnth);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);
// expected output: Array [1, 100000, 21, 30, 4]

array2.sort((a, b) => a - b);

console.log(array2);
