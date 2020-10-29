let maxNumber = Number.MAX_SAFE_INTEGER
console.log(maxNumber) // 9007199254740991

maxNumber = ++maxNumber
console.log(maxNumber) // 9007199254740992

// Even though we are incrementing the number, variable value stays same

maxNumber = ++maxNumber
console.log(maxNumber) // 9007199254740992

maxNumber = BigInt(maxNumber) + 10n
console.log(maxNumber) // 9007199254741002n

// The reasoning behind that number is that JavaScript uses double-precision
// floating-point format numbers as specified in IEEE 754 and can only
// safely represent numbers between -(253 - 1) and 253 - 1.
// Ex: Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
