const result = 'Hello world!'.indexOf('world')
console.log(result)

// console에서 6이 출력됨
// world는 Hello + 공백을 포함해서 0, 1, 2, 3, 4, 5, 6 으로 카운터

const result = 'Hello world!'.indexOf('hyuk')
console.log(result)

// console에서 -1 출력됨
// hyuk은 indexOf로 찾을 수 없다는 뜻


// String.prototype.indexOf()