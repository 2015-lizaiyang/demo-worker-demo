const puppeteer = require('puppeteer');

class puppeteerUtil {
  sleep(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time);
    })
  }
  async openBrowser(that) {
    let browser;
    
    if ((that.app.config.env==='local')) {
      browser = await puppeteer.launch({
        devtools: false,
        defaultViewport: {
          width: 1200,
          height: 1000
        },
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: false,
        timeout: 0
      }); //打开浏览器
    } else {
      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true,
        timeout: 0
      }); //打开浏览器
    }
    
    const page = await browser.newPage(); //打开一个空白页
    const navigationPromise = page.waitForNavigation({
      waitUntil: 'domcontentloaded'
    });
    return {
      browser,
      page,
      navigationPromise
    }
  }
}
module.exports = new puppeteerUtil();