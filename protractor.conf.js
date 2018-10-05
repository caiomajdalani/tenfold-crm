'use strict';

exports.config = {
  directConnect: true,
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,

  specs: [
    'spec/login.spec.js',
    'spec/crmSetup.spec.js',
    'spec/phoneSystem.spec.js',
    'spec/e2e.spec.js'
  ],

  framework: 'jasmine2',
  onPrepare: function () {
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-report'
    }));

    browser.ignoreSynchronization = true;
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['window-size=1440,900']
    }
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  }
};
