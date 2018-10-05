'use strict';

var _ = require('lodash');
var faker = require('faker');

class Helper {

  getCrmList() {
    return ['Salesforce', 'Zoho', 'Sugar', 'Oracle', 'Dynamics']
  }

  getSampleCrm() {
    return _.sample(this.getCrmList());
  }

  getPhoneSystemList() {
    return ['Asterisk', 'Broadsoft', 'Generic SIP', 'Mondago']
  }

  takeShot() {
    browser.sleep(1000);
    browser.takeScreenshot().then((png) => {
      allure.createAttachment('Screenshot', () => {
        return new Buffer(png, 'base64')
      }, 'image/png')();
    })
  }

}

module.exports = Helper;
