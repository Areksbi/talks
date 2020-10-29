const promises = [
  new Promise((resolve, reject) => setTimeout(reject, 300, 'Third')),
  new Promise((resolve, reject) => setTimeout(resolve, 1000, 'Second')),
  new Promise((resolve, reject) => setTimeout(resolve, 2000, 'First')),
];

// region "< ES2021"
Promise.race(promises)
  .then(value => console.log(`Result: ${value}`))
  .catch(err => console.log(`Error: ${err}`))

// Error: Third
// endregion "< ES2021"

Promise.any(promises)
  .then(value => console.log(`Result: ${value}`))
  .catch(err => console.log(`Error: ${err}`))

// Result: Second

Promise.any([
  Promise.reject('Error 1'),
  Promise.reject('Error 2'),
  Promise.reject('Error 3')
])
  .then(value => console.log(`Result: ${value}`))
  .catch (err => console.log(err))

// AggregateError: All promises were rejected
