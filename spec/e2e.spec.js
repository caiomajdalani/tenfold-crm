'use strict';

const Helper = require('../helper');
const Navbar = require('../pages/nav.po.js');
const Login = require('../pages/login.po.js');
const CRMSetup = require('../pages/crmSetup.po.js');
const PhoneSystem = require('../pages/phoneSystem.po.js');
const Review = require('../pages/review.po.js');

var faker = require('faker');

describe('e2e tests', () => {
  const helper = new Helper();
  const nav = new Navbar();
  const login = new Login();
  const crm = new CRMSetup();
  const phonesystem = new PhoneSystem();
  const review = new Review();

  beforeEach(() => {
    const email = 'tenfold@tenfold.com';
    const password = '123456';

    login.go();
    login.with(email, password);
    browser.sleep(1000);
  });

  describe('Check review page on select CRM options', () => {
    const email = 'tenfold@tenfold.com';
    const username = faker.internet.email();
    const password = '123456';
    const crmOption = 'Salesforce';
    const phoneSystemType = 'Asterisk';


    it('with success', () => {
      crm.selectOption(crmOption);
      crm.typeCredentials(email, password);
      browser.sleep(1000);
      crm.saveButton.click();
      phonesystem.selectOption(phoneSystemType);
      phonesystem.typeIp(faker.internet.ip());
      phonesystem.typeCredentials(username, password);
      phonesystem.finishButton.click();
      expect(review.app.isPresent()).toBe(true, 'Review page is not visible');
      expect(review.title.getText()).toEqual('Review Page');
      expect(review.loggedUser.getText()).toEqual(email);
      expect(review.crmSetupUser.getText()).toEqual(email);
      expect(review.crmSetupUserPass.getText()).toEqual(password);
      expect(review.phoneSystemType.getText()).toEqual('A');
      expect(review.phoneSystemUser.getText()).toEqual(username);
    });

  });

  afterEach(() => {
    helper.takeShot();
    nav.doLogout();
  });


});
