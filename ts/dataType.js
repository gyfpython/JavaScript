// boolean
var isDone = false;
// number
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// string
var str = 'YF';
var age = 18;
// `` + ${}
var sentence = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence1 = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
// array
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x;
x = ['la', 2];
var x0 = x[0].substr(0);
var x1 = x[1];
// enum 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var c = Color.Green;
var colorname = Color[0];
// any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var notSure1 = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
// prettySure.toFixed(); Error: Property 'toFixed' doesn't exist on type 'Object'.
var list2 = [1, true, "free"];
list[1] = 100;
// Void
function warnmsg() {
    console.log('This is a warning meesage');
}
var unusable = undefined; //Value: undefined or null
