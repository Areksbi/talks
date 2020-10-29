let formatter = new Intl.DateTimeFormat('en' , { timeStyle: 'short' })
console.log(formatter.format(Date.now())) // 11:27 PM


formatter = new Intl.DateTimeFormat('en' , { timeStyle: 'medium'})
console.log(formatter.format(Date.now())) // 11:27:57 PM


formatter = new Intl.DateTimeFormat('en' , { timeStyle: 'long' })
console.log(formatter.format(Date.now())) // 11:27:57 PM GMT+11


formatter = new Intl.DateTimeFormat('en' , { dateStyle: 'short'})
console.log(formatter.format(Date.now())) // 10/6/20


formatter = new Intl.DateTimeFormat('en' , { dateStyle: 'medium'})
console.log(formatter.format(Date.now())) // Oct 6, 2020


formatter = new Intl.DateTimeFormat('en' , { dateStyle: 'long'})
console.log(formatter.format(Date.now())) // October 6, 2020



formatter = new Intl.DateTimeFormat('en' , { timeStyle: 'short', dateStyle: 'long'})
console.log( formatter.format(Date.now())) // October 6, 2020 at 11:40 PM


formatter = new Intl.DateTimeFormat('it' , { timeStyle: 'short', dateStyle: 'long'})
console.log( formatter.format(Date.now())) // 6 ottobre 2020 23:40


formatter = new Intl.DateTimeFormat('de' , { timeStyle: 'short', dateStyle: 'long'})
console.log( formatter.format(Date.now())) // 6. Oktober 2020 um 23:40
