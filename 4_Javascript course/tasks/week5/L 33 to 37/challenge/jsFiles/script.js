/*
    If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
    ? console.log("> 40")
    : console.log("Unknown");

let st = "Elzero Web School";

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
    console.log("Good");
}

if (!typeof st !== "string") {
    console.log("Good");
}

if (typeof st.length === "number") {
    console.log("Good");
}

if (st.split(" ",1).toString().repeat(2) === "ElzeroElzero") {
    console.log("Good");
}
