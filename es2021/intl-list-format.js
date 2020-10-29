const arr = ['Pen', 'Pencil', 'Paper']

let formatter = new Intl.ListFormat('en', { style: 'short', type: 'conjunction' })
console.log(formatter.format(arr)) // Pen, Pencil, & Paper


formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
console.log(formatter.format(arr)) // Pen, Pencil, and Paper


formatter = new Intl.ListFormat('en', { style: 'narrow', type: 'conjunction' })
console.log(formatter.format(arr)) // Pen, Pencil, Paper


formatter = new Intl.ListFormat('it', { style: 'short', type: 'conjunction' })
console.log(formatter.format(arr)) // Pen, Pencil e Paper


formatter = new Intl.ListFormat('de', { style: 'long', type: 'conjunction' })
console.log(formatter.format(arr)) // Pen, Pencil und Paper
