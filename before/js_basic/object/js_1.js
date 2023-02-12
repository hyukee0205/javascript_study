const userAge = {
  // key : value
  name: 'hyuk',
  age: 25
}
const userEmail = {
  name: 'hyuk',
  email: 'aaa@gmail.com'
}

const target = Object.assign({}, userAge, userEmail)
console.log(target) // {name: 'hyuk', age: 25, email: 'aaa@gmail.com'}
console.log(userAge) // {name: 'hyuk', age: 25}
console.log(target === userAge) // false 
// {} 새로운 객체 데이터안에 userAge, userEmail을 합쳐줌


const a = { k : 123 }
const b = { k : 123 }
console.log(a === b) // false
