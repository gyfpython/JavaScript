// 类
class Greeter{
    greeting: string; // greeting 属性
    constructor(message: string){ //构造函数
        this.greeting = message;
    }
    greet(){ //greet 方法
        return "Hello" + this.greeting
    }
}

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());

// 继承

class Animal{
    move(distanceInMeters: number = 0){
        console.log(`Anomal Moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Animal1{
    name: string
    constructor(theName: string){ this.name = theName; }
    move(distanceInMeters: number = 5){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animal1{
    constructor(name: string){super(name);}
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal1{
    constructor(name: string){super(name);}
    move(distanceInMeters = 45){
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal1 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// 公共，私有与受保护的修饰符 默认为public
// private
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal2 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// protected
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承

class Person1 {
    protected name: string;
    protected constructor(theName: string){
        this.name = theName;
    }
}
// Employee2 能继承Person1
class Employee2 extends Person1 {
    private department: string;
    constructor(name: string, department: string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}
let howard1 = new Employee2("Howard","Sales");
// let john = new Person1("John"); // 错误: 'Person' 的构造函数是被保护的.

// readonly 修饰符
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string){
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs.");
// dad.name = "test"; name is readonly
// 参数属性
class Octopus1{
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string){}
}
let dad1 = new Octopus1("Man with the 8 strong legs.");

// 存取器
class User {
    fullName: string;
}
let user = new User();
user.fullName = "Bob";
if(user.fullName) {
    console.log(user.fullName);
}
let passcode = "secret passcode";

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}
// 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许改变它的值。

// 静态属性
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
abstract class Animal_1 {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在

// 把类当做接口使用
class Point {
    x: number;
    y: number;
}
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};