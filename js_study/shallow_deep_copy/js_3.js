const user = {
  name: 'hyuk',
  age: 85,
  emails: ['hyuk@gmail.com']
}

const copyUser = {...user}
console.log(copyUser === user) // false

// Object.assign으로 새로운 메모리로 할당 시켜줌

user.age = 22
console.log('user', user) // user {name: 'hyuk', age: 22, emails: Array(1)}
console.log('copyUser', copyUser) // {name: 'hyuk', age: 85, emails: Array(1)}

