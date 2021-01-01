"use strict";
// Boolean 类型
let isDone = false;
// number 类型
let count = 10;
// String 类型
let nickname = 'smilemaker';
// Symbol 类型
const sym = Symbol();
let obj = {
    [sym]: 'smilemaker'
};
// Array 类型
let list1 = [1, 2, 3];
let list2 = [1, 23, 3]; // 泛型
// Enum 类型
/*
  使用枚举类型我们可以定义一些带名字的常量。可以清晰表达意图或创建一组有区别的用例；
*/
// 1、数字枚举
var Direction1;
(function (Direction1) {
    Direction1[Direction1["NORTH"] = 0] = "NORTH";
    Direction1[Direction1["SOUTH"] = 1] = "SOUTH";
    Direction1[Direction1["EAST"] = 2] = "EAST";
    Direction1[Direction1["WEST"] = 3] = "WEST";
})(Direction1 || (Direction1 = {}));
let dir = Direction1.NORTH;
console.log(dir);
let dirName = Direction1[0];
console.log(dirName);
// 2、字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["NORTH"] = "NORTH";
    Direction2["SOUTH"] = "SOUTH";
    Direction2["EAST"] = "EAST";
    Direction2["WEST"] = "WEST";
})(Direction2 || (Direction2 = {}));
let dir2 = Direction2.WEST;
console.log(dir2);
let dir3 = 1 /* SOUTH */;
console.log(dir3);
// Any 类型
/*
  ts 中任何类型都可以被归为 Any类型，这让 Any 类型成为了系统的顶级类型
*/
let notSure = 666;
notSure = 'smilemaker';
notSure = false;
// 对 any 类型进行操作 看以看到非常宽松
// notSure.foo.bar;   // OK
// notSure[0][1] // ok
// notSure.trim() // ok
// notSure() // ok
// Unknown 类型
let val;
val = 1;
val = 'abc';
val = false;
// 无法将 unknown 类型的值赋值给其他类型
// let val1: string = val // error
// let val2: number = val // error
let val3 = val; // OK
let val4 = val; // ok
// 对 unknown 类型的值进行操作
// val.foo.bar;  // error
// val[0][1];   // error
// val.trim()   // error
// new val()   // error
/*
  所以对 unknown 类型进行操作都将被认为是类型不正确，
  通过将 any 类型 改为 unknown 类型，将允许任何操作改为进制任何操作
*/
// Tuple 类型
/*
  数组一般由相同类型的值组成，但有时我们需要再单个变量中储存不同类型的值，
  这时候就可以用元组
*/
let tupleType;
tupleType = ['smilemaker', false];
console.log(tupleType[0], tupleType[1]);
// Void 类型
function warnUser() {
    console.log('hello world');
}
// null 和 undefined 类型,
// TS 中 null 和undefined 的类型分别为 null 和 undefined
let u = undefined;
let n = null;
const photo = {};
Object.create(photo); // ok
Object.create(null); // ok
// Object 类的所有实例都继承了 Object 接口中的所有属性
// {} 类型
// 描述了一个没有成员的对象，当你试图访问这个对象的任意属性时，TS 会产生一个编译时错误
const obj1 = {};
// obj1.prop = 'smileMaker'  // error
//但你仍可以调用 Object 类型上定义的属性和方法
obj1.toString(); // ok
//  Never 类型
// never 类型表示永远不会存在的值的类型，例如， never 类型是那些总是会抛出异常或根本不会有返回值的函数表达式的返回值类型
function error(message) {
    throw new Error(message);
}
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
        // 这里 foo 被收窄为 string 类型
    }
    else if (typeof foo === 'number') {
        // 这里 foo 被收窄为 number 类型
    }
    else {
        //这里 foo 为 never 类型
        const check = foo;
    }
}
// 如果后期有人修改 Foo 的类型，就会被赋值为 never 类型而产生编译时错误
