"use strict";
// 组件不仅要支持当前的数据类型，同时也要能够支持未来的数据类型
// 泛型允许同一个函数接受不同类型参数，相比于 any ，使用泛型来创建可复用组件要更好，因为泛型会保留参数类型
// 1、泛型语法
/*
  T 代表 Type，在定义泛型时通常做第一个类型变量名称，除了T 还有以下：
  K (Key): 表示对象中的键类型
  V（Value): 表示对象中的值类型
  E（Element）：表示元素类型
*/
// 并非只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量
function identity(value, message) {
    console.log(message);
    return value;
}
// console.log(identity<number, string>(68, 'Semlinker'))
// 省略尖括号，让编译器自己判断参数类型
console.log(identity(68, 'Semlinker'));
// 3、泛型类
class GenericNumber {
}
let genericNumber = new GenericNumber();
genericNumber.zeroValue = 0;
genericNumber.add = function (x, y) {
    return x + y;
};
const sem = { name: 'semLinker', age: 23 };
function toArray(x) {
    return [x];
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 现在这个泛型被做了约束，因此它不在适用于任意类型
// loggingIdentity(3)  // 类型“number”的参数不能赋给类型“Lengthwise”的参数
// 这是我们需要传入符合约束类型的值，必须包含必须的属性
loggingIdentity({ length: 10, val: 3 });
// 4.6、Partial
// Partial<T> 的作用 就是将某个类型里的属性全部变为可选项 ？
/*
  定义：
  type Partial<T> = {
    [P in keyof T]?: T[P]
  }
*/
