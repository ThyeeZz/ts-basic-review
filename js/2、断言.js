"use strict";
// typescript 断言
//1、类型断言
/*
  有时候你会遇到这种情况，你会比 TS 更了解某个值的详细信息。通常这回发生在你清楚
  地知道一个实体具有比他现在更确切的类型；
  类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，
  只在编译阶段起作用
*/
// 类型断言有两种形式
// 1、尖括号语法
let someVlue = 'this is a string';
let strLength1 = someVlue.length;
let strLength2 = someVlue.length;
// 2、非空断言
/*
  新的后缀操作符 ! 可以用于断言操作对象是 非null 和 非uneducated 类型。
  具体而言，x! 将从 x 值域中排除 undefined 和 null
*/
// 1、忽略 undefined 和 null 类型
function myFunc(maybeString) {
    // const onlyString: string = maybeString; // error
    const ignoreUndefinedAndNull = maybeString; // ok
}
function myFunc2(numGenerator) {
    // const num1 = numGenerator();  // error
    const num2 = numGenerator(); // ok
}
// 3、确定赋值断言
/*
  在 TS 中 引入了确定赋值断言，即允许在实例属性和变量声明后面防止一个 ！,
  从而告诉 TS 该属性会被明确赋值
*/
let x; //let x: number;
initialze();
console.log(2 * x);
// Variable 'x' is used before being assigned.(2454)
function initialze() {
    x = 10;
}
// 通过 let x!:number; 确定赋值断言， TS 编译器就会知道 x 会被明确赋值
