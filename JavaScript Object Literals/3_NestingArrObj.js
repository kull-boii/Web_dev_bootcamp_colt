// Array of objects

const shoppingcart = [
  {
    product: "Wine",
    price: 45.0,
    quantity: 2,
  },
  {
    product: "Brush",
    price: 5.0,
    quantity: 1,
  },
  {
    product: "Glass",
    price: 4.75,
    quantity: 2,
  },
];

const studentGrade = {
  firstName: "Aadi",
  lastName: "Manchekar",
  strengths: ["C++", "JS"],
  exams: {
    midterm: 92,
    final: 95,
  },
};

// accessing data
console.log(studentGrade.exams.midterm);
// if u wanna use the bracket notation do include the "" for the key
// as every key in the object is turned into string
console.log(studentGrade["exams"]["final"]);
