const user = {
  name: 'hyuk',
  age: 85,
  emails: ['hyuk@gmail.com']
}

const copyUser = user
console.log(copyUser === user) // true

user.age = 22
console.log('user', user) // user {name: 'hyuk', age: 22, emails: Array(1)}
console.log('copyUser', copyUser) // copyUser {name: 'hyuk', age: 22, emails: Array(1)}

// copyUser의 age가 22로 바뀐 이유는 copyUser가 바라보는 메모리가 user와 바라보는 메모리 위치가 같아서,, !