// Assignment Operator Example
let num = 5
num+=10
console.log(num) // 15

// Logical Operator Example
let num1 = 6
let num2 = 3
console.log(num1 === 6 && num2 === 2) // false
console.log(num1 === 6 || num2 === 2) // true


// Logical Assignment Operator with && operator
let num1 = 5
let num2 = 10

num1 &&= num2

console.log(num1) // 10

// Line 19 can also be written as following ways
// 1. num1 && (num1 = num2)
// 2. if (num1) num1 = num2


// Logical Assignment Operator with || operator
let num1
let num2 = 10

num1 ||= num2

console.log(num1) // 10

// Line 5 can also be written as following ways
// 1. num1 || (num1 = num2)
// 2. if (!num1) num1 = num2


// Logical Assignment Operator with ?? operator
let num1
let num2 = 10

num1 ??= num2
console.log(num1) // 10

num1 = false
num1 ??= num2
console.log(num1) // false

// Line 5 can also be written as following ways
// num1 ?? (num1 = num2)
