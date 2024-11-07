let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE,3)); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True
console.log(!word.endsWith(letterO)); // True