// 类型兼容性
interface Named {
    name: string;
}
interface Person_1 extends Named {
    class: string;
}

let p: Person_1;
let x_1: Named;
let x_2 = { name: "test", location: "123"};
x_1 = x_2

function greet_1(n: Named){
    console.log('hello '+ n.name)
}
greet_1(x_2)

let items = [1, 2, 3];

// Don't force these extra arguments
items.forEach((item, index, array) => console.log(item));

// Should be OK!
items.forEach((item) => console.log(item));

let x_3 = () => ({name: 'Alice'});
let y_3 = () => ({name: 'Alice', location: 'Seattle'});

x_3 = y_3; // OK
// y_3 = x_3; // Error, because x() lacks a location property

// 类
class Animal_n{
    feet: number;
    constructor(name: string, numFeet: number){
        this.feet = numFeet;
    };
}
class Size{
    feet: number;
    constructor(numFeet: number){
        this.feet = numFeet;
    };
}
let a1: Animal_n =new Animal_n("123",123);
let s: Size = new Size(123);
console.log(a1.feet + s.feet)
a1=s;
s=a1;