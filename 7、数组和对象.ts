
// 1、数组结构
let x: number; let y: number; let z: number;
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
let personWithAge = { ...person, age: 13 };
let { name, ...rest } = person;

