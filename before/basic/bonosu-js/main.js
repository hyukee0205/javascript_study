// number, string, boolean, null, undefined
// primitive
let number = 2;
let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
let obj = {
  name: 'hyuk',
  age: '3'
}

console.log(obj.name);

let obj2 = obj
console.log(obj2.name);

obj2.name = 'hello';
console.log('-------');
console.log(obj.name);
console.log(obj2.name);

// const primitive, const object 차이

// const primitive는 재할당할수없다.
const abc = 1;
// abc = 2;  

// const object안에 있는 내용은 변경이 가능하다.
const objTest = {
  name: 'hyuk',
  age: 5,
}

objTest.name = 'helllo';


