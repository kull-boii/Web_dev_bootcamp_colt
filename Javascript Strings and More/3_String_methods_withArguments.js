// indexOf

let tvShow = "catDog";

// indexOf returns the starting position of the substring which is passed as arguments
console.log(tvShow.indexOf("cat")); // 0
console.log(tvShow.indexOf("Dog")); // 3
console.log(tvShow.indexOf("Moneky")); // -1 (Not Found)

// doesnt gives multiple occurances
const funnyLaugh = "hahaha hehehe huhuhu";
console.log(funnyLaugh.indexOf("ha")); // 0
console.log(funnyLaugh.indexOf("he")); // 7

// Slice
let str = "Aadi Prakash Manchekar";
// start ... end + 1
console.log(str.slice(4, 12));

// replace
let annoyingLaugh = funnyLaugh.replace("hahaha", "wahahwahahah");
console.log(annoyingLaugh);

// repeat
console.log("lol".repeat(3));
