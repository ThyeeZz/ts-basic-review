
// 类的属性与方法
/*
  静态属性与方法只能类来访问，属性方法是定义在类自身上的，可以被继承

  成员方法其实是定义到类的原型链上的，所以子类，实例都能访问
*/
class Greeter {
  // 静态属性
  static cname: string = 'Greeter';

  // 成员属性
  greeting: string;

  constructor(message: string) {
    this.greeting = message
  }

  // 静态方法
  static getClassName() {
    return 'Greeter'
  }
  // 成员方法
  greet() {
    return 'hello' + this.greeting
  }
}

let greeter = new Greeter("world");

// 2、ECMAScript 私有字段
/*
  私有字段以 # 字符开头，有时我们称之为私有名称；
  每个私有字段名称都唯一地限定于其包含的类；
  不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）；
  私有字段不能在包含的类之外访问，甚至不能被检测到。
*/
class Person {
  #name: string;
  constructor(name: string) {
    this.#name = name
  }
  greet() {
    console.log('hello,my name is ' + this.#name)
  }
}
let p = new Person('ppp')
// p.#name;   // 属性 "#name" 在类 "Person" 外部不可访问，因为它具有专用标识符。
p.greet()  // hello,my name is ppp

// 3、访问器 getter setter
let passcode: string = 'Hello Typescript';

class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode === "Hello Typescript") {
      this._fullName = newName;
    } else {
      console.log('ERROR: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee();
employee.fullName = 'Semlinker';
if (employee.fullName) {
  console.log(employee.fullName);
}

// 4、类的继承 extends
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} move ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters: number = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters);
  }
}
let sam = new Snake("Sammy the Python");
sam.move();


// 5、抽象类
/*
  使用 abstract 关键字申明的类称为抽象类。抽象类不能被实例化。
  因为它里面包含一个或多个抽象方法
*/
abstract class Person1 {
  constructor(public name: string) { };

  // 抽象方法
  abstract say(words: string): void
}
// const logo = new Person1() // error

class Developer extends Person1 {
  constructor(name: string) {
    super(name)
  }

  say(words: string): void {
    console.log(`${this.name} says ${words}`)
  }
}
const lolo = new Developer('lolo')
lolo.say('i love ts')


// 6、类方法的重载
class ProductService {
  getProducts(): void;
  getProducts(id: number): void;
  getProducts(id?: number) {
    if (typeof id === 'number') {
      console.log(`获取id为 ${id} 的产品信息`)
    } else {
      console.log(`获取所有的产品信息`);
    }
  }
}
const productService = new ProductService();
productService.getProducts(666); // 获取id为 666 的产品信息
productService.getProducts(); // 获取所有的产品信息 


