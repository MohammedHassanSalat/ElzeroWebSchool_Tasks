let theName = "Elzero";

// 1
console.log(Array.from(theName));

// 2
let set = new Set(theName);
console.log([...set]);

// 3
console.log([...theName]);

// 4
console.log(theName.split(''));

// 5
console.log(Object.assign([], theName));


// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']