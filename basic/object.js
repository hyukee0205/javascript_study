// Objects (key와 value에 집합체)

// 1. Literals and properties
const obj = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'Object constructior' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'hyuk', age: 26 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);


// 2. Computed properties (계산된)
console.log(ellie.name);
console.log(ellie['name']); // key값을 부를땐 항상 string ''로 불러오기
ellie['hasJob'] = true;
console.log(ellie.hasJob);


function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 40);
console.log(person4);


// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}













