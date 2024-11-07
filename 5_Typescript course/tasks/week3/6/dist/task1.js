"use strict";
class Show {
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    constructor(_title) {
        this._title = _title;
    }
}
let tester = new Show("Elzero");
console.log(tester.title);
tester.title = "Osama";
console.log(tester.title);
//# sourceMappingURL=task1.js.map