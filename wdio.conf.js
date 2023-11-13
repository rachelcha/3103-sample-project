// wdio.conf.js
module.exports = {
    runner: 'local',
    specs: [
      './test/**/*.js'
    ],
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome',
    }],
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
  };
  