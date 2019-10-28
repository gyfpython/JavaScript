var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function identity(arg) {
    return arg;
}
var string1 = identity("string");
var string2 = identity("string");
// 使用泛型变量
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// 泛型类型
var myIdentity = identity;
function identity1(arg) {
    return arg;
}
var myIdentity1 = identity;
// 范型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity2(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity2({ length: 10, value: 3 });
// 在泛型约束中使用类型参数
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }
// let xx = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(xx, "a"); // okay
// getProperty(xx, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// 在泛型里使用类类型
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal_2 = /** @class */ (function () {
    function Animal_2() {
    }
    return Animal_2;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal_2));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal_2));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
