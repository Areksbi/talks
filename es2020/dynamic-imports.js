document.getElementById('btn')
  .addEventListener('click', async () => {
    const { printMyName } = await import('./dynamic-imports-module.js')
    printMyName('Roman')
  })
