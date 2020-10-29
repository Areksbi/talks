let employee = {}
let name = employee.name ?? 'John'

// Examples
let name
console.log(name ?? 'John') // John
console.log(name || 'John') // John

name = null
console.log(name ?? 'John') // John
console.log(name || 'John') // John

name = NaN
console.log(name ?? 'John') // NaN
console.log(name || 'John') // John

name = 0
console.log(name ?? 'John') // 0
console.log(name || 'John') // John

name = false
console.log(name ?? 'John') // false
console.log(name || 'John') // John

name = ''
console.log(name ?? 'John') //
console.log(name || 'John') // John
