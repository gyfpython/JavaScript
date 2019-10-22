// let declare
// 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。

function f(input: boolean) {
    let a: number = 100;
    let b: number =200;

    if (input) {
        // Still okay to reference 'a'
        let b: number = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

// catch语句里声明的变量也具有同样的作用域规则

try {
    throw "exception"
}
catch (e){
    console.log('error')
}
// error: 'e' doesn't exist here
// console.log(e)

// 暂时性死区 变量在定义之前不能使用它
let a: number = 1
a++

function foo() {
    // okay to capture 'exist'
    return exist;
}

// 不能在'exist'被声明前调用'foo'
// 运行时应该抛出错误
let exist: string = "123";
foo();

// 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明
function foo1(foo: number){
    let foo1: number = 100
}

function foo2(condition: boolean,foo:number){
    if(condition){
        let foo2: number = 100;
        return foo2;
    }
    return foo2;
}

// 块级作用域变量的获取
function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city: string = "Seattle";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}

// const 声明变量值不可以被重新赋值
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}
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