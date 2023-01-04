const pi = 3.1414592653
console.log(pi)

const str = pi.toFixed(2)
// 소수점자리 2자리까지만 출력 + 문자데이터로 출력됨
console.log(str)
// console -> 3.14
console.log(typeof str)
// console -> string




const integer = parseInt(str)
// console -> 3 
// parseInt 정수만 출력

const float = parseFloat(str)
// console -> 3.14
// parseFloat 소수점자리까지 유지해주면서, 문자데이터를 숫자로 출력
console.log(integer) // 3
console.log(float) // 3.14
console.log(typeof integer, typeof float) // number number


// 전역함수 parseInt, parseFloat