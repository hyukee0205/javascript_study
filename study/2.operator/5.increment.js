// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
a = 0;
let b = a++; // 이 코드가 끝난 뒤 a=1로 증가 
console.log(b); // 0출력
console.log(a); // 1출력
console.clear();
// ++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let c = ++a;
console.log(c); // 1출력
console.log(a); // 1출력

//console ++d, ++d;
let d = 0;
console.log(d++); // 0출력, 코드 끝난 후 d가 1로 증가
// console.log(++d); 



