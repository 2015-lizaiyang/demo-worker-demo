// app.js
const puppeteerUtil = require('./app/service/common/puppeteer-util');
module.exports = app => {
  let browser = null;
  app.messenger.on('send-worker', async data => {
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      if (browser==null) {
        browser = await puppeteerUtil.openBrowser(ctx);
        console.log(browser);
      }
    });
  });
}