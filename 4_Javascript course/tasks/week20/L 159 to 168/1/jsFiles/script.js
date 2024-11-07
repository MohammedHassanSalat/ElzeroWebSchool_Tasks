// let birthday = new Date("9-11-2003");



let dateNow = new Date();
let birthday = new Date("9/11/2003");
let dateDiff = dateNow - birthday;

// console.log(dateDiff);
console.log(`${(dateDiff / 1000).toFixed(0)} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed(0)} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed(0)} Hours`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed(0)} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30).toFixed(0)} Months`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(0)} Years`);
