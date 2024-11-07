let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1,arr2).sort().slice(arr2.length).join("").toLowerCase()
// allArrs.sort()
console.log(allArrs); // fxy