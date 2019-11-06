// agent.js

module.exports = agent => {
  agent.messenger.on('egg-ready', () => {
    agent.messenger.on('demo-worker', data => {
      // process data
      agent.messenger.sendRandom('send-worker', { data });
    });
  });
};