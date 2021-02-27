const animal = "Zebra";

// Length of the animal
console.log(animal.length);
// so ouur characters are b/w [ 0 ... (animal.length - 1) ]

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

const firstName = "Aadi";
const lastName = "Manchekar";

const fullName = firstName + " " + lastName;
// or
// const fullName = `${firstName} ${lastName}`;
console.log(fullName);

console.log(1 + "hi"); // String "1hi"
