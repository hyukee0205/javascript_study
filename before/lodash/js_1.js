import _ from 'lodash'

const usersA = [
  { userId: '1', name: 'hyuk' },
  { userId: '2', name: 'dongme' }
]

const usersB = [
  { userId: '1', name: 'hyuk' },
  { userId: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
// { userId: '1', name: 'hyuk' }
// { userId: '2', name: 'dongme' }
// { userId: '1', name: 'hyuk' }
// { userId: '3', name: 'Amy' }
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// { userId: '1', name: 'hyuk' }
// { userId: '2', name: 'dongme' }
// { userId: '3', name: 'Amy' }
// 배열이 하나일때 사용


const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
// { userId: '1', name: 'hyuk' }
// { userId: '2', name: 'dongme' }
// { userId: '3', name: 'Amy' }
// 배열이 여러개 일때 사용
