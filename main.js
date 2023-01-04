// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

import myData from './myData.json'

console.log(myData)
// array: []
// boolean: true
// null: null
// number: 123
// object: {}
// string: "hyuk"

const user = {
  name: 'hyuk',
  age: 22,
  emails: [
    'hyuk@gmail.com',
    'hello@gmail.com'
  ]
}
console.log('user', user)
//{name: 'hyuk', age: 22, emails: Array(2)}


const str = JSON.stringify(user)
console.log('str', str)
// {"name":"hyuk","age":22,"emails":["hyuk@gmail.com","hello@gmail.com"]}
// JSON.stringify() -> 자바스크립트 객체 데이터를 JSON 형식으로 변경해준다.

console.log(typeof str)
// string 

const obj = JSON.parse(str)
console.log('obj', obj)
// {name: 'hyuk', age: 22, emails: Array(2)} 
// JSON.parse() -> JSON 형식의 데이터를 JS에서 사용 가능한 객체 데이터로 만들어준다.

