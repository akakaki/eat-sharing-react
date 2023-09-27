// github page pwa 的應對方式，下面網址提到的第三種方式爬蟲判斷狀態較為友好，後面在進行變動 =)
// https://juejin.cn/post/6844904047602860046

const fs = require('fs')

fs.cp('./build/index.html', './build/404.html', (err) => {
  if (err === null) return false
  console.log('err', err)
})