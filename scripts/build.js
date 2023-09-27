const fs = require('fs')

// fs.readFile('./build/index.html', { encoding: 'utf-8' }, (err, data) => {
//   console.log(data)
// })

fs.cp('./build/index.html', './build/404.html', (err) => {
  if (err === null) return false
  console.log('err', err)
})