type custom = string;

function isHeOld(age: number): custom {
    if (age > 30) {
        return '"Yes"';
    }
    return '"No"';
}

// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"