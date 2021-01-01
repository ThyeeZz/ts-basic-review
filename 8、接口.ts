
/*
  接口时非常重要的改变，他是对行为的抽象，二具体如何行动需要由类去实现
  TS 中接口用于对类的一部分进行抽象，也常用于对 [对象的形状] 进行描述
*/

// 1、对象的形状
interface Person {
  name: string,
  age: number
}
let semlinker: Person = {
  name: 'semlinker',
  age: 23
}

// 2、可选 | 只读属性
interface Person1 {
  readonly name: string,
  age?: number
}
/*
  制度属性用于限制只能在对象刚刚创建的时候修改i其值，
  此外 TS 还提供了 ReadonlyArray<T> 类型，与 Array<T> 类似，
  只是把多有可变方法去掉了，以确保数组创建后不能被修改
*/
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12  // error
ro.push(1)   // error
ro.length  //  error
a = ro  //  error

// 任意属性
/*
  有时候我们希望接口中除了必选和可选属性外，还允许有其他任意属性，
  这时候我们可以用 索引签名 的形式来满足
*/
interface Person3 {
  name: string,
  age?: number,
  [propName: string]: any
}
const p1: Person3 = { name: 'semlinker' };
const p2: Person3 = { name: 'semlinker', age: 23 }
const p3: Person3 = { name: 'semlinker', age: 23, gender: 'male' }

// 接口与类型别名的区别
// 1、接口
interface Point1 {
  x: number,
  y: number
}
interface SetPoint {
  (x: number, y: number): void;
}
// 2、类型别名
type Point2 = {
  x: number,
  y: number
}
type SetPoint2 = (x: number, y: number) => void

// 3、与接口不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组
type Name = string; // 原始类型

type PartialPointX1 = { x: number }  // object
type PartialPointY = { y: number }  // object

type PartialPoint = PartialPointX1 | PartialPointY;  // 联合类型

type Data = [number, string];  // 元组


// 3、Extend
/*
  接口和类型别名都可以被扩展，但语法不同，
  此外，接口和类型别名不是互斥的，接口可以扩展类型别名，反之则不行
*/

// Interface extends interface
interface PartialPointX2 { x: number; }
interface Point3 extends PartialPointX2 {
  y: number
}

// Type alias extends type alias
type PartialPointX3 = { x: number };
type point = PartialPointX3 & { y: number }

// 接口扩展类型别名
type PartialPointX4 = { x: number };
interface Point4 extends PartialPointX4 { y: number };

// 类型别名扩展接口
interface PartialPointX5 { x: number }
type Point5 = PartialPointX5 & { y: number }


// 4、implement
// 类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型
interface Point6 {
  x: number;
  y: number;
}
class SomePoint implements Point6 {
  x = 1;
  y = 2
}
type Point7 = {
  x: number, y: number
}
class SomePoint2 implements Point7 {
  x = 1; y = 2
}

// 声明合并
// 接口可以定义多次，会被自动合并为单个接口
interface Point8 { x: number };
interface Point8 { y: number };
const point: Point8 = {
  x: 1, y: 2
}

