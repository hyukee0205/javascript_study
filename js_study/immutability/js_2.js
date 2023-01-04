let a = { k: 1 }
let b = { k: 1 }


console.log(a, b, a === b) // {k: 1} {k: 1} false
a.k = 7
b = a 
console.log(a, b, a === b) // {k: 7} {k: 7} true
a.k = 2
console.log(a, b, a === b) // {k: 2} {k: 2} true
let c = b
console.log (a, b, c, a === c) // {k: 2} {k: 2} {k: 2} true
a.k = 9 
console.log (a, b, c, a === c) // {k: 9} {k: 9} {k: 9} true

// 참조형 데이터같은 경우, 구분을 해서 비교하고 싶을땐 
// 얕은 복사, 깊은 복사를 사용해서 구분해야 됨 (실제 메모리상에서 분리해서 사용)