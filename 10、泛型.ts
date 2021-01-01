
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

function identity<T, U>(value: T, message: U): T {
  console.log(message)
  return value
}

// console.log(identity<number, string>(68, 'Semlinker'))

// 省略尖括号，让编译器自己判断参数类型
console.log(identity(68, 'Semlinker'))


// 2、泛型接口
interface GenericIndentityFn<T> {
  (arg: T): T;
}

// 3、泛型类
class GenericNumber<T>{
  zeroValue: T;
  add(x: T, y: T)=> T;
}

let genericNumber = new GenericNumber<number>();
genericNumber.zeroValue = 0;
genericNumber.add = function (x, y) {
  return x + y
}

// 4、泛型工具类型
// 4.1、TS中 typeof 可以获取一个变量声明或对象的类型
interface Person2 {
  name: string,
  age: number
}

const sem: Person2 = { name: 'semLinker', age: 23 };
type Sem = typeof sem;  // => Person2

function toArray(x: number): Array<number> {
  return [x]
}
type Func = typeof toArray;  // -> (x:number)=> number[]

// 4.2、keyof，此操作用于获取某种类型的所有键，其返回类型是林和类型
type K1 = keyof Person2;  // 'name' | 'age';
type K2 = keyof Person2[];  // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: Person2 };  // string | number

// TS 中支持两种索引签名，数字索引和字符串索引
interface StringArray {
  // 字符串索引 -> keyof StringArray => string | number
  [index: string]: string
}
interface StringArray1 {
  // 数字索引 -> keyof StringArray1 => number
  [index: number]: string
}
/*
  为了同时支持两种索引类型，旧的要求数字索引的返回值必须是字符串索引返回值的子类。
  其中的原因就是当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引
  所以 keof { [ x: string ]: person } 的结果会返回 string |number
*/

// 4.3、in 用来遍历枚举类型
type Keys = "a" | "b" | "c";
type Obj = {
  [p in Keys]: any
} // -> {a: ang, b: ang, c: ang}

// 4.4、 infer，在条件语句中，使用 infer 声明一个类型变量，并对他进行使用
type RetuenType<T> = T extends (
  ...args: any[]
) => infer R ? R : any

// 4.5、extends，通过 extends 关键字添加泛型约束
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 现在这个泛型被做了约束，因此它不在适用于任意类型
// loggingIdentity(3)  // 类型“number”的参数不能赋给类型“Lengthwise”的参数
// 这是我们需要传入符合约束类型的值，必须包含必须的属性
loggingIdentity({ length: 10, val: 3 })

// 4.6、Partial
// Partial<T> 的作用 就是将某个类型里的属性全部变为可选项 ？
/*
  定义： 
  type Partial<T> = {
    [P in keyof T]?: T[P]
  }
*/ 


