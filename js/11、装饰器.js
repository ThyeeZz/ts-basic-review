"use strict";
/*
  1、装饰器是什么
    装饰器是一个表达式，该表达式被执行后返回一个函数，
    函数的入参分贝是 target、name 和 descriptor
    执行该函数后，可能返回 descriptor 对象， 用于配置 target 对象
*/
/*
  2、装饰器的分类
    类装饰器（Class decorators）
    属性装饰器（Property decorators）
    方法装饰器（Method decorators）
    参数装饰器（Parameter decorators）
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 需要注意的是，若要启用实验性的装饰器特性，你必须在命令行或 tsconfig.json 里启用 experimentalDecorators 编译器选项：
// 命令行： tsc --target ES5 --experimentalDecorators
/*
  tsconfig.json：
    {
      "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
      }
    }
*/
// 3、类装饰器
function Greeter1(target) {
    target.prototype.greet = function () {
        console.log("hello Semlinker!");
    };
}
let Greeting = class Greeting {
    constructor() {
        // 内部实现
    }
};
Greeting = __decorate([
    Greeter1
], Greeting);
let myGreeting = new Greeting();
myGreeting.greet();
// 装饰器传参
function Greeter2(words) {
    return function (target) {
        target.prototype.greet = function () {
            console.log(words);
        };
    };
}
// 4、属性装饰器
/*
  属性装饰器就是用来装饰属性的，它接收两个参数
    target: Object -被装饰的类
    propertyKey： string | symbol - 被装饰类的属性名
*/
function logProperty(target, key) {
    delete target[key];
    const backingFiled = "_" + key;
    Object.defineProperty(target, backingFiled, {
        writable: true,
        enumerable: true,
        configurable: true
    });
    // property getter
    const getter = function () {
        const currVal = this[backingFiled];
        console.log(`Get: ${key} => ${currVal}`);
        return currVal;
    };
    // property setter
    const setter = function (newVal) {
        console.log(`Set: ${key} => ${newVal}`);
        this[backingFiled] = newVal;
    };
    // create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    logProperty
], Person.prototype, "name", void 0);
const p1 = new Person("semLinker"); // Set: name => semlinker
p1.name = "kakuqo"; // Set: name => kakuqo
// 5、方法装饰器
/*
  方法装饰器，用来装饰方法，接受三个参数
    target: Object -- 被装饰的类
    propertyKey: string | symbol -- 方法名
    descriptor： TypePropertyDescript -- 属性描述符
*/
function log(target, propertyKey, descriptor) {
    let originMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log("wrapped function: before invoking" + propertyKey);
        let result = originMethod.apply(this, args);
        console.log("wrapped function: after invoking" + propertyKey);
        return result;
    };
}
class Task {
    runTask(arg) {
        console.log('runTask invoked, args: ' + arg);
        return "finished";
    }
}
__decorate([
    log
], Task.prototype, "runTask", null);
let task = new Task();
let res = task.runTask('learn ts');
console.log("result:" + res);
// 6、参数装饰器
/*
  参数装饰器就是用来装饰函数参数的，它接受三个参数：
    target: Object -- 被装饰的类
    propertyKey： string | symbol -- 方法名
    parameterIndex： number -- 方法中参数的索引值
*/
function Log(target, key, parameterIndex) {
    let functionLogged = key || target.prototype.constructor.name;
    console.log(`tThe parameter in position ${parameterIndex} at ${functionLogged} has been decorated`);
}
let Greeter = class Greeter {
    constructor(phrase) {
        this.greeting = phrase;
    }
};
Greeter = __decorate([
    __param(0, Log)
], Greeter);
