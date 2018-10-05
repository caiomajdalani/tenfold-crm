'use strict';

class Navbar {
  constructor() {
    this.logout = element(by.css('ul[class*=navbar-right] a span[class*=log-in]'))
  }

  doLogout()  {
    this.logout.click();
  }
}

module.exports = Navbar;
