const str = 'hyuk1234@gmail.com'

console.log(str.match(/.+(?=@)/)[0])
// console -> hyuk1234

// 정규표현식 (/.+(?=@)/) @앞에 부분 출력
// 리턴값 -> 배열 -> [0]