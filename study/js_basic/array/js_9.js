// .find() .findIndex()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']


const a = fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(a) // Banana, B로 시작하는 단어를 찾으면 반환하고 종료(정규표현식 활용)


const b = fruits.findIndex(fruit => {
  return /^C/.test(fruit)
})
console.log(b) // Cherry, 0, 1, 2 index 순서로 2번째에 해당하여 2출력