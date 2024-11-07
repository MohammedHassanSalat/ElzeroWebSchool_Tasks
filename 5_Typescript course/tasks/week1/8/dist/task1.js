"use strict";
function printInConsole(...params) {
    for (let i = 0; i < params.length; i++) {
        console.log(`The Value Is ${params[i]} And Type Is ${typeof params[i]}`);
    }
    console.log("Done");
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=task1.js.map