const prom1 = new Promise.resolve(5)
const prom2 = new Promise((resolve, reject) => setTimeout(reject, 1500, 'Something went wrong'))

const promises = [prom1, prom2]

// region "< ES2020"
Promise.all([prom1, prom2]).then(results => results.map(res => console.log(res)));

// Uncaught (in promise) Something went wrong
// endregion "< ES2020"


Promise.allSettled(promises).then(results => results.map(res => console.log(res)))

// Object {status: "fulfilled", value: 2}
// Object {status: "rejected", reason: "Something went wrong"}
