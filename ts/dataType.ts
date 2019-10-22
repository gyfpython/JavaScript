// boolean
let isDone: boolean = false;
// number
let decLiteral: number = 6;
let hexLiteral:number = 0xf00d;
let binaryLiteral:number = 10;
let octalLiteral: number = 484;
// string
let str: string = 'YF';
let age: number = 18;
// `` + ${}
let sentence: string = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
let sentence1: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
// array
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];
// Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同t
let x: [string, number];
x = ['la', 2];
let x0: string = x[0].substr(0);
let x1: number = x[1];
// enum 枚举
enum Color {Red,Green,Yellow};
let c: Color = Color.Green;
let colorname: string = Color[0];
// any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let notSure1: any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure: Object = 4;
// prettySure.toFixed(); Error: Property 'toFixed' doesn't exist on type 'Object'.
let list2: any[] = [1, true, "free"];
list2[1] = 100;
// Void
function warnmsg(): void {
    console.log('This is a warning meesage');
}
let unusable = undefined; //Value: undefined or null
