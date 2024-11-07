let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let h = 0;

let ans = myArray.reduce(function (acc,current) {  
    return acc+current;
}).split(",").join("");

console.log(ans);