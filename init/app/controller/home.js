'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.service.price.allPrice(ctx.request.query)
      .then(data => {
        ctx.body = data;
        ctx.status = 200;
      });
  }
}

module.exports = HomeController;
