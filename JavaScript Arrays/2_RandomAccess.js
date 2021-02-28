let firstName = "Aadi manchekar";

// Suppose we have to make m capital at the start
// we can't do
console.log(firstName[5]);

firstName[5] = "M"; // and expect our firstName to be "Aadi Manchekar"
console.log(firstName);
// we just can't update the indiviual elements by accessing them

let colors = ["rad", "blue", "orange"];
console.log(colors[0][0]); // r
console.log(colors[1][0]); // b

// but we can change the elements in array
console.log(colors);
colors[0] = "red";
console.log(colors);
