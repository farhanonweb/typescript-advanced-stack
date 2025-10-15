"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function task1() {
    console.log("task1");
}
function task2() {
    console.log("task2");
}
function task12() {
    setTimeout(() => {
        console.log("task12");
    }, 1000);
}
function task22() {
    console.log("task22");
}
task12();
task22();
//# sourceMappingURL=async_programming.js.map