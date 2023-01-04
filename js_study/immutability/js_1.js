let a = 1
let b = 4

// 데이터를 비교할때는 할당된 메모리 주소를 갖고 비교한다고 생각해야됨

console.log(a, b, a === b) // 1 4 false
b = a
console.log(a, b, a === b) // 1 1 true
a = 7 
console.log(a, b, a === b) // 7 1 false
let c = 1
console.log (b, c, b === c) // 1 1 true
// c는 기존에 있던 1이라는 메모리로 할당됨