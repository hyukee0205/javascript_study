const user = {
  name: 'hyuk',
  age: 25,
  email: 'aaa@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) // (3) ['name', 'age', 'email']
// ['name', 'age', 'email']

console.log(user['email']) // aaa@gmail.com

const values = keys.map(key => user[key]) 
console.log(values) // (3) ['hyuk', 25, 'aaa@gmail.com']

