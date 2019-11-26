"use strict";
// let declare
// 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
function f(input) {
    var a = 100;
    var b = 200;
    if (input) {
        // Still okay to reference 'a'
        var b_1 = a + 1;
        return b_1;
    }
    // Error: 'b' doesn't exist here
    return b;
}
// catch语句里声明的变量也具有同样的作用域规则
try {
    throw "exception";
}
catch (e) {
    console.log('error');
}
// error: 'e' doesn't exist here
// console.log(e)
// 暂时性死区 变量在定义之前不能使用它
var a = 1;
a++;
function foo() {
    // okay to capture 'exist'
    return exist;
}
// 不能在'exist'被声明前调用'foo'
// 运行时应该抛出错误
var exist = "123";
foo();
// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明
function foo1(foo) {
    var foo1 = 100;
}
function foo2(condition, foo) {
    if (condition) {
        var foo2_1 = 100;
        return foo2_1;
    }
    return foo2;
}
// 块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
// const 声明变量值不可以被重新赋值
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
