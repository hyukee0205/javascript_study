// 전개 연산자 (Spread)

const fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits) // (3) ['Apple', 'Banana', 'Cherry']
console.log(...fruits) // Apple Banana Cherry


function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
}

// 축약형 const toObject = (a, b, c) => ({a, b, c}) 

console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: 'Cherry'}





