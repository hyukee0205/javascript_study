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

// 5. in operator
// 해당하는 키가 object안에 있는지 확인 후 불린값 출력
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
  console.log(key);
}

// for (value iterable)
const array = [1, 2, 3, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

















