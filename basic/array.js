'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3. Looping over an array
//for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//for of
for (let fruit of fruits) {
  console.log(fruit);
}
//forEach
fruits.forEach((fruit) => console.log(fruit));

console.clear();

// 4. Addtion, deletion, copy
// push: add an item to th end
fruits.push('딸기', '복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);


// splice
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '사과', '수박');
console.log(fruits);

// combine two arrays
const fruits2 = ['키위', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();

// idnexOf
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('레몬'));
console.log(fruits.indexOf('코코넛'));

// includes
console.log(fruits.includes('사과'));
console.log(fruits.includes('코코넛'));

// lastIndexOf
console.clear();
console.log(fruits.indexOf('코코넛'));
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));


























