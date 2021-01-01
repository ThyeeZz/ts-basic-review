"use strict";
/*
  接口时非常重要的改变，他是对行为的抽象，二具体如何行动需要由类去实现
  TS 中接口用于对类的一部分进行抽象，也常用于对 [对象的形状] 进行描述
*/
let semlinker = {
    name: 'semlinker',
    age: 23
};
/*
  制度属性用于限制只能在对象刚刚创建的时候修改i其值，
  此外 TS 还提供了 ReadonlyArray<T> 类型，与 Array<T> 类似，
  只是把多有可变方法去掉了，以确保数组创建后不能被修改
*/
let a = [1, 2, 3, 4];
let ro = a;
ro[0] = 12; // error
ro.push(1); // error
ro.length; //  error
a = ro; //  error
const p1 = { name: 'semlinker' };
const p2 = { name: 'semlinker', age: 23 };
const p3 = { name: 'semlinker', age: 23, gender: 'male' };
;
class SomePoint {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
class SomePoint2 {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
}
;
;
const point = {
    x: 1, y: 2
};
