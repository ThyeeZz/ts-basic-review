
// 1 参数类型和返回类型
function createUserId(name: string, id: number): string {
  return name + id
}

// 2、函数类型
let IdGenarator: (charts: string, nums: number) => string;

IdGenarator = createUserId;

// 3、可选参数以及默认参数
// 3.1、可选参数
function createUserId1(name: string, id: number, age?: number): string {
  return age ? name + id + age : name + id
}
// 3.2、 默认参数
function createUserId2(
  id: number,
  name: string = "smileMaker",
  age?: number
): string {
  return age && name + id + age || name + id
}
console.log(createUserId2(10))

// 函数重载
/*
  函数重载时使用相同名称和不同参数数量或类型创建多个方法的一种能力
*/
type Combinable = number | string;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}
// 重载类中长远方法
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: number, b: string): string;
  add(a: string, b: number): string;
  add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString()
    }
    return a + b
  }
}

const calculator = new Calculator()
const res = calculator.add('aaa','bbbb')
console.log(res)





