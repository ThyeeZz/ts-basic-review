
/*
  在TS 中，交叉类型是将做个类型合并为一个类型。
  通过 & 运算符，将多种类型叠加到一起成为一种类型
*/

type PartialPointX = { x: number };
type Point = PartialPointX & { y: number };

let point: Point = {
  x: 1,
  y: 1
}

// 1、同名基础类型属性的合并
/*
  假设在合并多个类型的过程中，刚好出现某些类型存在相同的成员
  但对应的类型有不一致，比如：
*/
interface X {
  c: string,
  d: string
}
interface Y {
  c: number,
  e: string
}

type XY = X & Y;
type YX = Y & X;

// let p: YX = { c: 6, d: '1', e: '2' };  // 不能将类型“number”分配给类型“never”
// let q: XY = { c: '6', d: '1', e: '2' };  // 不能将类型“string”分配给类型“never”

// 混入后成员 c 的类型为 string & number，c的类型既可以是 string 也可以是 number，所以称为了 never

// 2、同名非基础类型属性的合并
/*
  上面的示例中，接口 X 和 Y 中成员 c 的类型是基本类型，
  如果是非基本类型会是如何呢
*/

interface D { d: boolean };
interface E { e: string };
interface F { f: number }

interface A { x: D; };
interface B { x: E; }
interface C { x: F };

type ABC = A & B & C;
let abc: ABC = {
  x: {
    d: true,
    e: 'semilMaker',
    f: 666
  }
}

console.log(abc)
// 由此可知，混入多个类型是，若存在相同成员，且成员类型为非基础数据类型时，时可以成功合并的


