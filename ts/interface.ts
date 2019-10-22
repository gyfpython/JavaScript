interface LabelledValue {
    label: string;
  }
  
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
  }
  
function createSquare(config: SquareConfig): {color: string; width: number; area: number} {
    let newSquare = {color: "white", width: 10, area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
let mySquare = createSquare({color: "black"});

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 20}

// 函数类型 接口定义函数类型：包含参数名称及类型，返回值类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result:number = source.search(subString);
    return result > -1;
}
// 参数名不需要与接口定义中相同
let mySearch1: SearchFunc;
mySearch1 = function(src: string, sub: string): boolean {
    let result: number = src.search(sub)
    return result > -1
}
// 类型系统自动推断参数类型，类型检查器自动检查返回值类型
let mySearch2: SearchFunc;
mySearch2 = function(src, sub): boolean {
    let result: number = src.search(sub)
    return result > -1
}

// 可索引的类型
interface StringArray {
    [index: number]: string;
  }
  
let myArray: StringArray;
myArray = ["Bob", "Fred"];
  
let myStr: string = myArray[0];
let myStr1: string = myArray[1];

// 类类型 TypeScript能够用它来明确的强制一个类去符合某种契约
interface ClockInterface{
    currentTime: Date;
}

class Clock implements ClockInterface{
    currentTime: Date;
    constructor(h: number, m: number){}
}
// 接口中也可以描述方法
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date);
}

class Clock1 implements ClockInterface1 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface2 {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface2 {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface2 {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// 继承接口
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
// 一个接口可以继承多个接口，创建出多个接口的合成接口。
interface Shape1 {
    color: string;
}

interface PenStroke1 {
    penWidth: number;
}

interface Square1 extends Shape1, PenStroke1 {
    sideLength: number;
}

let square1 = <Square1>{};
square1.color = "blue";
square1.sideLength = 10;
square1.penWidth = 5.0;

// 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c10 = getCounter();
c10(10);
c10.reset();
c10.interval = 5.0;

// 接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}
