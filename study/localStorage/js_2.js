// localStorage 데이터 삭제

const user = {
  name: 'hyuk',
  age: 27,
  emails: [
    'hyuk@gmail.com',
    'hello@gmail.com'
  ]
}

// localStorage.setItem('user', user)
// object Object로 출력됨
// 전부 문자데이터로 출력해야됨
// JS 데이터를 전부 문자데이터로 바꾸는 메소드를 실행시켜야됨

// localStorage.setItem('user', JSON.stringify(user))

console.log(localStorage.getItem('user'))
// 콘솔창에서 문자데이터로 출력됨 문자데이터를 다시 객체 데이터로 변경해줄 메소드 실행
// JSON 형식으로 출력됨

console.log(JSON.parse(localStorage.getItem('user')))

localStorage.removeItem('user') // 로컬 데이터 삭제




