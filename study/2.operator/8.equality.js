// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // ✨
console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false, 메모리 주소, 참조값이 다름
console.log(obj1 === obj2); // false, object 타입은 같으나, 값 자체는 다르기 때문
console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2;
console.log(obj3 == obj2); // true, 참조값(메모리 주소)를 복사했기 때문에 true
console.log(obj3 === obj2); // true, 참조값도 같고, object 타입도 같기 때문
