"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 交叉类型（Intersection Types）
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person_at = /** @class */ (function () {
    function Person_at(name) {
        this.name = name;
    }
    return Person_at;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('intersectionType');
    };
    return ConsoleLogger;
}());
var jim = extend(new Person_at("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
// Union Types
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
padLeft("Hello world", 4); // returns "    Hello world"
padLeft("Hello", 'Tester');
function getSmallPet(x) {
    // ...
    var fish = { swim: true, layEggs: 4 };
    var bird = { fly: true, layEggs: 4 };
    if (x === 2) {
        return fish;
    }
    else {
        return bird;
    }
}
var pet = getSmallPet(3);
pet.layEggs; // okay
// pet.swim();    // errors
