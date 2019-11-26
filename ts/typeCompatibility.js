"use strict";
var p;
var x_1;
var x_2 = { name: "test", location: "123" };
x_1 = x_2;
function greet_1(n) {
    console.log('hello ' + n.name);
}
greet_1(x_2);
var items = [1, 2, 3];
// Don't force these extra arguments
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
var x_3 = function () { return ({ name: 'Alice' }); };
var y_3 = function () { return ({ name: 'Alice', location: 'Seattle' }); };
x_3 = y_3; // OK
// y_3 = x_3; // Error, because x() lacks a location property
// 类
var Animal_n = /** @class */ (function () {
    function Animal_n(name, numFeet) {
        this.feet = numFeet;
    }
    ;
    return Animal_n;
}());
var Size = /** @class */ (function () {
    function Size(numFeet) {
        this.feet = numFeet;
    }
    ;
    return Size;
}());
var a1 = new Animal_n("123", 123);
var s = new Size(123);
console.log(a1.feet + s.feet);
a1 = s;
s = a1;
