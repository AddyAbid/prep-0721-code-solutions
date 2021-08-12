function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var converted = convertHoursToMinutes(2);
console.log('sum', converted);

function getGreeting(name) {
  return name;
}

var greeting = getGreeting('World!');
console.log('Hello', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var timesFive = addAndMultiplyBy5(10, 5);
console.log(timesFive);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var dividedBy5 = multiplyAndDivideBy5(35, 10);
console.log(dividedBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtracted = subtractTwoNumbers(22, 7);
console.log('total', subtracted);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Addy', 'Abid');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}

var cubeNum = cube(5);
console.log(cubeNum);
