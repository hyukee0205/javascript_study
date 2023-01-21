'use strict';


// 1. Class declarations
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('hyuk', 27);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();



// 2. Getter & Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'jobs', -1);
console.log(user1.age);


// 3. Fields (pubilc, private)
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static
// class Article {
//   static publisher = 'Dream Coding';
//   constructor(articleNumber) {
//     this.articleNumber = articleNumber;
//   }
// }

// static printPublisher() {
//   console.log(Article.publisher);
// }

// 5. Inheritance 
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('삼각형 !');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}


const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. instanceOf
// 왼쪽 오브젝트가 오른쪽 클래스를 이용해서 만들어진 오브젝트인지 불린값으로 확인

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
























