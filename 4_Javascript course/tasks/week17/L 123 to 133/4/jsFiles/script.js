let theNumber = 100020003000;
let s = theNumber.toString();
let ans = new Set(s);
ans.delete('0');

console.log(...Array.from(ans, (n) => +n));


// Needed Output
// 123