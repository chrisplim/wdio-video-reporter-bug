const assert = require('assert')

class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    getHeader() {
        return $('h1');
    }
}

describe('Example Test', () => {
  before(async () => {
    await browser.enablePerformanceAudits()
  })
  after(async () => {
    await browser.disablePerformanceAudits()
  })

  it('Check expected text', async () => {
    const page = new Page()
    await page.open('/')

    // Use devtools here
    const browserMetrics = await browser.getMetrics()
    assert(browserMetrics.speedIndex < 5000)

    const header = await page.getHeader()
    await expect(header).toHaveText("Example Domain")
  })
})
