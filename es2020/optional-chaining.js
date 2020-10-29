const employee = {
  name: 'John',
  surname: 'Doe',
  age: 56,
  address: {
    street: {
      name: 'Oxford',
      number: 45
    }
  }
}

// region "< ES2020"
// const streetNumber = student
//   && student.address
//   && student.address.street
//   && student.address.street.number
// endregion "< ES2020"

// >= ES2020
const streetNumber = employee?.address?.street?.number
console.log(streetNumber)

// Arrays
let colors = ['red', 'green', 'blue']
console.log(colors?.[1]) // 'green'

// Setting color Array to null
colors = null
console.log(colors?.[1]) // undefined

// Functions
let myFunc = () => 'Hello World'
console.log(myFunc?.()) // Hello World

// Setting color function to null
myFunc = null
console.log(myFunc?.()) // undefined
