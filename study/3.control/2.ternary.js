// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('🍎');
} else {
  console.log('😍');
}
fruit === 'apple' ? console.log('🍎') : console.log('😍');

let emoji = fruit === 'apple' ? '🍎' : '😍';
// emoji 값을 조건에 맞게 할당해준다.
console.log(emoji);
