/*
    Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop()
my.pop()
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.length/my.length,my.length-(my.length/my.length))); // ["Elham", "Mazero"]

my[counter-(my.length/my.length)] = "Elzero";
console.log(my[counter-(my.length/my.length)]); // "Elzero"

console.log(`${my[counter-(my.length/my.length)][counter+(my.length/my.length)]}${my[counter-(my.length/my.length)][my.length+(my.length/my.length)].toUpperCase()}`); // "rO"