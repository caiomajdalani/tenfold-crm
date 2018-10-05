'use strict';

const Helper = require('../helper');
const Navbar = require('../pages/nav.po.js');
const Login = require('../pages/login.po.js');
const CRMSetup = require('../pages/crmSetup.po.js');
const PhoneSystem = require('../pages/phoneSystem.po.js');

var faker = require('faker');

describe('Phone System', () => {
  const helper = new Helper();
  const nav = new Navbar();
  const login = new Login();
  const crm = new CRMSetup();
  const phonesystem = new PhoneSystem();

  beforeEach(() => {
    const email = 'tenfold@tenfold.com';
    const password = '123456';

    login.go();
    login.with(email, password);
    browser.sleep(1000);
    crm.selectOption('Salesforce');
    crm.typeCredentials(email, password);
    browser.sleep(1000);
    crm.saveButton.click();
  });

  it('should Phone System list', () => {
    const data = helper.getPhoneSystemList();
    let list = phonesystem.getOptions();

    expect(list.count()).toEqual(data.length);
    data.forEach(function (item, index) {
      expect(list.get(index).getText()).toEqual(item);
    });
  });

  describe('should have user credentials', () => {

    it('when select Asterisk and type IP', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp(faker.internet.ip());
    });

    it('when select Broadsoft and type IP', () => {
      phonesystem.selectOption('Broadsoft');
      phonesystem.typeIp(faker.internet.ip());
    });

    it('when select Generic SIP and type IP', () => {
      phonesystem.selectOption('Generic SIP');
      phonesystem.typeIp(faker.internet.ip());
    });

    it('when select Mondago and type IP', () => {
      phonesystem.selectOption('Mondago');
      phonesystem.typeIp(faker.internet.ip());
    });

    afterEach(() => {
      browser.sleep(1000);
      expect(phonesystem.username.isPresent()).toBe(true, 'User name should be visible');
      expect(phonesystem.password.isPresent()).toBe(true, 'Email is should be visible');
    });

  });

  describe('should not have user credentials', () => {

    it('when IP is a string', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp('a.a.a.a');
    });

    it('when invalid IP', () => {
      phonesystem.selectOption('Broadsoft');
      phonesystem.typeIp('0.0.0.0');
    });

    afterEach(() => {
      browser.sleep(1000);
      expect(phonesystem.username.isPresent()).toBe(false, 'User name should be not visible');
      expect(phonesystem.password.isPresent()).toBe(false, 'Email should be not visible');
    });

  });

  describe('choice a Phone System IP and save user credentials', () => {
    const email = faker.internet.email();
    const password = '123456';

    it('with success', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp(faker.internet.ip());
      phonesystem.typeCredentials(email, password);
      phonesystem.finishButton.click();
    });

    it('when user back for CRM Setup Page', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp(faker.internet.ip());
      phonesystem.typeCredentials(email, password);
      phonesystem.backButton.click();
      expect(crm.app.isPresent()).toBe(true, 'CRM Setup page is not visible');
    });

    it('when user fill incorrect email', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp(faker.internet.ip());
      phonesystem.typeCredentials(email, password);
      phonesystem.finishButton.click();
      expect(true).toBe(false, 'Should be display the message: Incorret email');
    });

    it('when password should e at least six chars long', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp(faker.internet.ip());
      phonesystem.typeCredentials(email, password);
      phonesystem.finishButton.click();
      expect(true).toBe(false, 'Should be display the message: Password should be at least six chars long');
    });

    it('when user not fill username and password', () => {
      phonesystem.selectOption('Asterisk');
      phonesystem.typeIp(faker.internet.ip());
      phonesystem.typeCredentials('', '');
      phonesystem.finishButton.click();
      expect(true).toBe(false, 'Should be display the message: Username and password as required');
    });

  });

  afterEach(() => {
    helper.takeShot();
    nav.doLogout();
  });


});
