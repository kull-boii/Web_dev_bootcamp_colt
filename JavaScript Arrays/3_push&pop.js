/* 
PUSH : add to end
POP : remove from end
shift : remove from start
unshift : add to start
*/

let persons = ["Aadi", "Sai", "Mrigank", "Harshad"];
persons.push("Roshan");
console.log(persons);

// POP : Removes the last element from an array and returns it
const removedElement = persons.pop();
console.log(`Removed Element is : ${removedElement} \n${persons}`);

// Unshift : Inserts new elements at the start of an array.
persons.unshift("Roshan", "Aditya");
console.log(persons);

// SHIFT : Removes the first element from an array and returns it.
persons.shift();
console.log(persons);
