
/*
  类型保护是可执行运行时检查的一种或表达式，用于确保该类型在一定范围内
*/

// 1、 in 关键字
interface Admin {
  name: string,
  privileges: string[]
}
interface Employee {
  name: string,
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name:' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges:' + emp.privileges)
  }
  if ("startDate" in emp) {
    console.log("strtDate:" + emp.startDate)
  }
}

// 2、typeof 关键字
function padLeft(val: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(" ") + val
  }

  if (typeof padding === 'string') {
    return padding + val
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

// 3、instanceof 关键字
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpace: number) { }

  getPaddingString() {
    return Array(this.numSpace + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
    return this.value
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);
if (padder instanceof SpaceRepeatingPadder) {
  // padder 的类型收窄为 'SpaceRepeatingPadder'
}

// 4、自定义类型保护的类型谓词
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function isString(x: any): x is string {
  return typeof x === 'string';
}
console.log(isNumber('12'))

