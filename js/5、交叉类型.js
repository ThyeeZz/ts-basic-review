"use strict";
/*
  在TS 中，交叉类型是将做个类型合并为一个类型。
  通过 & 运算符，将多种类型叠加到一起成为一种类型
*/
let point = {
    x: 1,
    y: 1
};
;
;
;
;
let abc = {
    x: {
        d: true,
        e: 'semilMaker',
        f: 666
    }
};
console.log(abc);
// 由此可知，混入多个类型是，若存在相同成员，且成员类型为非基础数据类型时，时可以成功合并的
