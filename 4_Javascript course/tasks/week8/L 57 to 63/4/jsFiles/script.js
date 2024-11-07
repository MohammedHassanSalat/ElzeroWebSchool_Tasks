function checkStatus(a, b, c) {
    switch (true) {
        case typeof a === "string" && typeof b === "number":
            console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c ? "" : "Not "}Available For Hire`);
            break;
        case typeof a === "number" && typeof b === "string":
            console.log(`Hello ${b}, Your Age Is ${a}, You Are ${c ? "" : "Not "}Available For Hire`);
            break;
        case typeof c === "number" && typeof b === "string":
            console.log(`Hello ${b}, Your Age Is ${c}, You Are ${a ? "" : "Not "}Available For Hire`);
            break;
        case typeof b === "number" && typeof c === "string":
            console.log(`Hello ${c}, Your Age Is ${b}, You Are ${a ? "" : "Not "}Available For Hire`);
            break;
        case typeof a === "number" && typeof c === "string":
            console.log(`Hello ${c}, Your Age Is ${a}, You Are ${b ? "" : "Not "}Available For Hire`);
            break;
        case typeof c === "number" && typeof a === "string":
            console.log(`Hello ${a}, Your Age Is ${c}, You Are ${b ? "" : "Not "}Available For Hire`);
            break;
        default:
            console.log("nothing");
    }    
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"