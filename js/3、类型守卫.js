"use strict";
/*
  类型保护是可执行运行时检查的一种或表达式，用于确保该类型在一定范围内
*/
function printEmployeeInformation(emp) {
    console.log('Name:' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges:' + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("strtDate:" + emp.startDate);
    }
}
// 2、typeof 关键字
function padLeft(val, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + val;
    }
    if (typeof padding === 'string') {
        return padding + val;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
class SpaceRepeatingPadder {
    constructor(numSpace) {
        this.numSpace = numSpace;
    }
    getPaddingString() {
        return Array(this.numSpace + 1).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
let padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
    // padder 的类型收窄为 'SpaceRepeatingPadder'
}
// 4、自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
console.log(isNumber('12'));
