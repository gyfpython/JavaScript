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

let greeter = new Greeter("world");

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
console.log(howard.name); // 错误
