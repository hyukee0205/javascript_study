// localStorage 데이터 수정

const user = {
  name: 'hyuk',
  age: 27,
  emails: [
    'hyuk@gmail.com',
    'hello@gmail.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)

localStorage.setItem('user', JSON.stringify(obj))

