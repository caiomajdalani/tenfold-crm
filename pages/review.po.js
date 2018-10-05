'use strict';

class Review {
  constructor() {
    this.app = element(by.css('app-review'));
    this.title = element(by.css('app-review h1'));
    this.loggedUser = element(by.css('app-review > p:nth-child(3) > span'));
    this.crmSetupUser = element(by.css('app-review > p:nth-child(5) > span:nth-child(1)'));
    this.crmSetupUserPass = element(by.css('app-review > p:nth-child(5) > span:nth-child(3)'));
    this.phoneSystemType = element(by.css('app-review > p:nth-child(8) > span:nth-child(1)'));
    this.phoneSystemUser = element(by.css('app-review > p:nth-child(8) > span:nth-child(3)'));
    this.backButton = element(by.css('#back-button'));
  }
}

module.exports = Review;
