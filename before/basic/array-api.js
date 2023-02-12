// Q1. make a string out of an array
// 배열을 하나의 String으로 변경
{
  const fruits = ['사과', '바나나', '오렌지'];
  const result = fruits.join('');
  console.log(result);
}

// Q2. make an array out of a string
// String -> 배열로 변경
{
  const fruits = '사과, 키위, 바나나, 체리'
  console.log(fruits);
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this
{
  const array = [1, 2, 3, 4, 5];
  const reuslt = array.reverse(); // 배열 자체도 바뀜
  console.log(reuslt);
  console.log(array);
}

// Q4. make new array without the firts two ele
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.slice(2, 5);
  console.log(newArray);
  console.log(array);
}


console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
];

// Q5. 90점인 학생 찾기
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}


// Q6. enrolled <- true인 학생만 찾아내서 배열로 출력
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. score 45, 80, 90, 66, 88 점수들만 출력
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. 점수가 50점보다 낮은 학생이 있는지 없는지 찾기 있으면 true값 출력
{
  console.clear();

  // some -> 조건중에 하나라도 맞는게 있으면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // every -> 조건내용이 다 맞으면 true
  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. 학생들의 평균 점수 구하기
{
  console.clear();
  const result = students.reduce((prev, curr) => {
    console.log('--------');
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. 학생들의 모든 점수를 string으로 변환 -> '45, 80, 90, 66, 88'
{
  console.clear();
  const result = students.map(student => student.score).join();
  console.log(result);
}

// Q11. 학생들의 점수를 순서대로 배열하고 낮은 순으로 나오게 하기
{
  console.clear();
  const result = students.map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}









































