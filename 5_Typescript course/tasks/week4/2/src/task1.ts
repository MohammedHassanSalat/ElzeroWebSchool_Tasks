// Write Function Code Here
function showTypes <T = "",S = "",B = "">(val1?: T,val2?: S,val3?: B): string {
    const v1 = val1 !== undefined ? val1 : "Nothing";
    const v2 = val2 !== undefined ? val2 : "Nothing";
    const v3 = val3 !== undefined ? val3 : "Nothing";
    return `${v1} - ${v2} - ${v3}`;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true