import { intersectionTypeAnnotation } from "@babel/types";

// 交叉类型（Intersection Types）
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person_at {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log('intersectionType')
    }
}
var jim = extend(new Person_at("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

// Union Types
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
padLeft("Hello world", 4); // returns "    Hello world"
padLeft("Hello",'Tester')
// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
interface Bird {
    fly: boolean;
    layEggs: number;
}

interface Fish {
    swim: boolean;
    layEggs: number;
}

function getSmallPet(x: number): Fish | Bird {
    // ...
    let fish: Fish = {swim: true,layEggs: 4};
    let bird: Bird = {fly: true,layEggs: 4};
    if (x ===2){
        return fish
    }else{
        return bird
    }  
}

let pet = getSmallPet(3);
pet.layEggs; // okay
// pet.swim();    // errors