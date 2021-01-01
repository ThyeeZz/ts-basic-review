"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 1、数组结构
let x;
let y;
let z;
let five_array = [0, 2, 3, 4];
[x, y, z] = five_array;
// let [x1:number,y1:number,z1:number] = five_array;
// 2、数组展开运算
let two_array = [1, 2];
let four_array = [...two_array, 3, 4];
// 对象
// 对象解构
let person = {
    name: 'smileMaker',
    gender: 'male'
};
let { name, gender } = person;
// 对象展开
let personWithAge = Object.assign(Object.assign({}, person), { age: 13 });
let { name } = person, rest = __rest(person, ["name"]);
