function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function surprise(callback) {
  const result = callback(2, 3); // add(2, 3)
  console.log(result);
}

surprise(add);
surprise(divide);