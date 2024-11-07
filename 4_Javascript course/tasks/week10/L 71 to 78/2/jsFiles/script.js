let myString = "EElllzzzzzzzeroo";

// Elzero

let ans = myString.split("").filter(function (ele,index,arr) {
    return ele != arr[index+1];
}).join("");

console.log(ans);