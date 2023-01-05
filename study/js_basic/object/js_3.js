// 구조 분해 할당
// 비구조화 할당

const user = {
  name: 'hyuk',
  age: 85,
  email: 'hyuk@gmail.com'
}

const {name, age} = user
// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`) // 사용자의 이름은 hyuk입니다.
console.log(`${name}의 나이는 ${age}입니다.`) // hyuk의 나이는 85입니다.
console.log(`${name}의 이메일 주소는 ${user.email}입니다.`) // hyuk의 이메일 주소는 hyuk@gmail.com입니다.
console.log(`${user.address}`) // undefined

const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d) // Apple Banana Cherry undefined
