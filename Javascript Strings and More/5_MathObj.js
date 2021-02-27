// Math Object

// value of pi
console.log(Math.PI);

// value of e
console.log(Math.E);

// round
console.log(Math.round(4.9)); // 5

// absolute value
console.log(Math.abs(-456)); // 456

// removes decimal
console.log(Math.floor(3.999)); // 3

// power
console.log(Math.pow(3, 2)); // 9

// Random Numbers
// generates a random decimal b/w 0 and 1 (non inclusive4)
Math.random();

// Random Integers
// lets generate random numbers b/w 1 and 10
const step1 = Math.random(); //0.596

const step2 = step1 * 10; // 5.96

const step3 = Math.floor(step2); // 5

const step4 = step3 + 1; // 6

console.log(step4);
// thus we can rewrite in one line as
console.log(Math.floor(Math.random() * 10) + 1);
