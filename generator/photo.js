
const Puppeteer = require('puppeteer')
const fs = require('fs')

const type = process.argv[2]

Puppeteer.launch({ headless: false }).then(b => {
  b.newPage().then(p => {
    p.goto(`file:///Users/lancepollard/start/mount/tone-script/tmp/symbols2.html`).then(() => {
      console.log('loading pdf')
      // p.setContent(html)
      p.waitForFunction('window.DONE', { timeout: 0 }).then(() => {
        console.log('creating pdf')
        p.screenshot({
          fullPage: true,
          path: `make.png`,
          width: '1320px'
        }).then(() => {
          b.close()
        })
      })
    })
  })
})
