import _ from 'lodash'

const users = [
  { userId: '1', name: 'hyuk' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser) // { userId: '3', name: 'Amy' }
console.log(foundUserIndex) // 2

_.remove(users, { name: 'hyuk' })
console.log(users)
// { userId: '2', name: 'Neo' }
// { userId: '3', name: 'Amy' }
// { userId: '4', name: 'Evan' }
// { userId: '5', name: 'Lewis' }