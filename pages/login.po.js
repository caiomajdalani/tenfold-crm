'use strict';


class Login {

  constructor() {
    this.formLogin = element(by.css('app-login form'));
    this.userName = element(by.css('input[name=username]'));
    this.password = element(by.css('input[name=password]'));
    this.signIn = element(by.css('#login-button'));
    this.message = element(by.css('.alert-danger'));
  }

  go() {
    browser.get('https://qa-engineer-test.firebaseapp.com');
  }

  with(user, pwd) {
    this.userName.sendKeys(user);
    this.password.sendKeys(pwd);
    this.signIn.click();
  }
}

module.exports = Login;