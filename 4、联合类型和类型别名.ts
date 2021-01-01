
// 1、联合类型通常与 null 和 undefined 一起使用

const sayHello = (name: string | undefined) => {
  /*...*/
}
sayHello("semlinker");
sayHello(undefined);

// 类型A 和 B 联合后的类型是：同时接受A 和B 值的类型，还有如下用法：
let num3: 1 | 2 = 2;
type EventName = 'click' | 'scroll' | 'mouseover';
// 以上被称为 字面量类型，用来约束取值范围

// 2、可辨识联合
/*
  可辨识联合类型，也成为代数数据类型或标签联合类型。
  蛀牙包含3个要点： 可辨识，联合类型和类型守卫
  这种类型的本质是结合联合类型和字面量类型的一种类型保护方法。
  如果同一个类型是多个类型联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块
*/
// 2.1、可辨识：要求联合类型中的每一个元素都含有一个单例类型属性,例如：

enum CarTransimission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: 'motorcycle', // discriminant
  make: number // year
}

interface Car {
  vType: 'car',   // discriminant
  transmission: CarTransimission
}

interface Truck {
  vType: 'truck',  // discriminant
  capacity: number  // in tons
}

// 2.2、联合类型
type Vehicle = Motorcycle | Car | Truck;

// 2.3、类型守卫、
const EVALUATION_FACTOR = Math.PI;

function evaluatePrice(vehicle: Vehicle) {
  // 此处因为 motorcycle、car 上没有 capacity属性而编译时报错
  //return vehicle.capacity * EVALUATION_FACTOR;

  // 修改为：
  switch (vehicle.vType) {
    case 'car': return vehicle.transmission * EVALUATION_FACTOR;
    case 'truck': return vehicle.capacity * EVALUATION_FACTOR;
    case 'motorcycle': return vehicle.make * EVALUATION_FACTOR;
    default: return 100
  }
}

const myTruck: Truck = { vType: 'truck', capacity: 9.5 };
evaluatePrice(myTruck)

// 3、类型别名,用来给类型取个新的名字
type Message = string | string[];
let greet = (message: Message)=>{
  // ....
};

