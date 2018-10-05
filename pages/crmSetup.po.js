'use strict';

class CRMSetup {
  constructor() {
    this.app = element(by.css('app-crm'));
    this.label = element(by.css('label[for=crm]'));
    this.select = element(by.css('ng-select[id=crm]'));
    this.email = element(by.css('#email'));
    this.password = element(by.css('#password'));
    this.saveButton = element(by.css('#save-button'));
    this.message = element(by.css('.alert-danger'));
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

  typeCredentials(email,password) {
    this.email.sendKeys(email);
    this.password.sendKeys(password);
  }
}

module.exports = CRMSetup;
