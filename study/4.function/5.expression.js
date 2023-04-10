// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
// 코드안에서 어떤 값을 바로 리턴하는 경우엔 {} 생략 가능, return도 생략 가능
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)-즉각적으로 호출되는 함수
// 함수를 ()묶으면 값으로 정의됨
(function run() {
  console.log('😍');
})();
