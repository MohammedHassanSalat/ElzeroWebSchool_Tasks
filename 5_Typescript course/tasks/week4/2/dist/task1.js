"use strict";
function showTypes(val1, val2, val3) {
    const v1 = val1 !== undefined ? val1 : "Nothing";
    const v2 = val2 !== undefined ? val2 : "Nothing";
    const v3 = val3 !== undefined ? val3 : "Nothing";
    return `${v1} - ${v2} - ${v3}`;
}
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
//# sourceMappingURL=task1.js.map