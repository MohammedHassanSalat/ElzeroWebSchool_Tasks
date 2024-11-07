/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

function showDetails(a, b, c) {
    const message = (typeof a === "string" && typeof b === "number")
    ? `Hello ${a}, Your Age Is ${b}, You Are ${c ? "" : "Not "}Available For Hire`
    : (typeof a === "number" && typeof b === "string")
        ? `Hello ${b}, Your Age Is ${a}, You Are ${c ? "" : "Not "}Available For Hire`
        : (typeof c === "number" && typeof b === "string")
            ? `Hello ${b}, Your Age Is ${c}, You Are ${a ? "" : "Not "}Available For Hire`
            : (typeof b === "number" && typeof c === "string")
                ? `Hello ${c}, Your Age Is ${b}, You Are ${a ? "" : "Not "}Available For Hire`
                : (typeof a === "number" && typeof c === "string")
                    ? `Hello ${c}, Your Age Is ${a}, You Are ${b ? "" : "Not "}Available For Hire`
                    : (typeof c === "number" && typeof a === "string")
                        ? `Hello ${a}, Your Age Is ${c}, You Are ${b ? "" : "Not "}Available For Hire`
                        : "nothing";
    console.log(message);
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"