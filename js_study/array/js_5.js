// .forEach()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array)
})

// Apple 0 (3) ['Apple', 'Banana', 'Cherry']
// Banana 1 (3) ['Apple', 'Banana', 'Cherry']
// Cherry 2 (3) ['Apple', 'Banana', 'Cherry']

fruits.forEach(function (fruit, i) {
  console.log(fruit, i)
})

// index 줄여서 i 로 생략가능