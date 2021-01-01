"use strict";
// 1 参数类型和返回类型
function createUserId(name, id) {
    return name + id;
}
// 2、函数类型
let IdGenarator;
IdGenarator = createUserId;
// 3、可选参数以及默认参数
// 3.1、可选参数
function createUserId1(name, id, age) {
    return age ? name + id + age : name + id;
}
// 3.2、 默认参数
function createUserId2(id, name = "smileMaker", age) {
    return age && name + id + age || name + id;
}
console.log(createUserId2(10));
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// 重载类中长远方法
class Calculator {
    add(a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}
const calculator = new Calculator();
const res = calculator.add('aaa', 'bbbb');
console.log(res);
