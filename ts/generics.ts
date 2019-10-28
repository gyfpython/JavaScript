function identity<T>(arg: T): T {
    return arg;
}
let string1 = identity("string");
let string2 = identity<string>("string");

// 使用泛型变量
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// 泛型类型
let myIdentity: <T>(arg: T) => T = identity;
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity1: GenericIdentityFn = identity;

// 范型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// 泛型约束
interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity2({length: 10, value: 3});

// 在泛型约束中使用类型参数
// function getProperty(obj: T, key: K) {
//     return obj[key];
// }

// let xx = { a: 1, b: 2, c: 3, d: 4 };

// getProperty(xx, "a"); // okay
// getProperty(xx, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// 在泛型里使用类类型
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal_2 {
    numLegs: number;
}

class Bee extends Animal_2 {
    keeper: BeeKeeper;
}

class Lion extends Animal_2 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal_2>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!