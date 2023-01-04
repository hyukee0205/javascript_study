// .push() .unshift()
// 원본 데이터 수정됨, 주의 !

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']


numbers.push(5)
console.log(numbers) // (5) [1, 2, 3, 4, 5], 맨뒤에 5를 추가


numbers.unshift('0')
console.log(numbers) // (6) ['0', 1, 2, 3, 4, 5] 맨앞에 0을 추가

//numbers 원본 수정됨