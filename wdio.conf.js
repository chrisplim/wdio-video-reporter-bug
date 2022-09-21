const video = require('wdio-video-reporter')
exports.config = {
  specs: ['./test/specs/**/*.js'],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true,
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://example.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver', 'devtools'],
  framework: 'mocha',
  reporters: [
    'spec',
    // Uncomment the video reporter usage to see the bug
    // // UNCOMMENT_ME
    // [
    //   video,
    //   {
    //     saveAllVideos: false,
    //     videoSlowdownMultiplier: 3,
    //   },
    // ],
    // // UNCOMMENT_ME
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
}
