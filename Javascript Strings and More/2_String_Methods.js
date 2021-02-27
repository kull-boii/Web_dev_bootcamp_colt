// Differece between a property and a method
/* 

thing.property;
eg arr.length

thing.method();
str.toLowerCase();

*/

let greeting = "   so much spacious     ";

// trim method removes all the whitespaces present before and after the string
console.log(greeting.trim()); // so much spacious

// chainning many methods together
greeting = greeting.trim().toUpperCase();
console.log(greeting);
