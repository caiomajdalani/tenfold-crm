'use strict';

class PhoneSystem {
  constructor() {
    this.app = element(by.css('app-phonesystem'));
    this.label = element(by.css('label[for=phonesystem]'));
    this.select = element(by.css('ng-select[id=phonesystem]'));
    this.ip = element(by.css('input[id=ip]'));
    this.username = element(by.css('input[id=username]'));
    this.password = element(by.css('input[id=password]'));
    this.finishButton = element(by.css('#finish-button'));
    this.backButton = element(by.css('#back-button'));
  }

  getOptions() {
    browser.sleep(1000);
    this.select.click();
    browser.sleep(1000);
    return this.select.all(by.css('.options ul li'))
  }

  selectOption(name) {
    this.getOptions();
    var option = element(by.cssContainingText('.options ul li', name));
    option.click();
  }

  typeIp(ip) {
    this.ip.sendKeys(ip);
  }

  typeCredentials(username, password) {
    this.username.sendKeys(username);
    this.password.sendKeys(password);
  }
}

module.exports = PhoneSystem;
