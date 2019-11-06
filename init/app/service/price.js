'use strict';
const Service = require('egg').Service;
class PriceService extends Service {
  async allPrice(ctx) {
    // 业务层
    for (let index = 0; index < 50; index++) {
      // 这个执行多少次就会启动多少个进程
      await this.app.messenger.sendToAgent('demo-worker', { index })
    }
  }
}

module.exports = PriceService;
