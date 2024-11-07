let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesReg = /Os(\d+)?O/ig;

console.log(specialNames.match(specialNamesReg));


// Output
// ['Os10O', 'OsO', 'Os100O']