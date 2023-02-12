// rest parameter 

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']


function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
}

console.log(toObject(...fruits))

// a: 'Apple', b: 'Banana', c: Array(2)}
// c는 나머지 cherry와 orange를 배열로 출력


