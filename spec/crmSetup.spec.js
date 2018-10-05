'use strict';

const Navbar = require('../pages/nav.po.js');
const Login = require('../pages/login.po.js');
const CRMSetup = require('../pages/crmSetup.po.js');
const Helper = require('../helper');

describe('CRM Setup', () => {
  const helper = new Helper();
  const nav = new Navbar();
  const login = new Login();
  const crm = new CRMSetup();

  beforeEach(() => {
    login.go();
    login.with('tenfold@tenfold.com', '123456');
    browser.sleep(1000);
  });

  it('should have CRMs list', () => {
    const data = helper.getCrmList();
    let list = crm.getOptions();

    expect(list.count()).toEqual(data.length);
    data.forEach(function (item, index) {
      expect(list.get(index).getText()).toEqual(item);
    });
  });

  describe('should have user credentials', () => {

    it('when select Salesforce', () => {
      crm.selectOption('Salesforce');
    });

    it('when select Zoho', () => {
      crm.selectOption('Zoho');
    });

    it('when select Sugar', () => {
      crm.selectOption('Sugar');
    });

    it('when select Oracle', () => {
      crm.selectOption('Oracle');
    });

    it('when select Dynamics', () => {
      crm.selectOption('Dynamics');
    });

    afterEach(() => {
      expect(crm.email.isPresent()).toBe(true, 'Email is should be visible');
      expect(crm.password.isPresent()).toBe(true, 'Password should be visible');
      expect(crm.saveButton.isEnabled()).toBe(true, 'Save Button should be enable');
    });

  });

  describe('check if save button is displayed', () => {
    const email = 'tenfold@tenfold.com';
    const password = '123456';

    it('when select Salesforce', () => {
      crm.selectOption('Salesforce');
      crm.typeCredentials(email, password);
    });

    it('when select Zoho', () => {
      crm.selectOption('Zoho');
      crm.typeCredentials(email, password);
    });

    it('when select Sugar', () => {
      crm.selectOption('Sugar');
      crm.typeCredentials(email, password);
    });

    it('when select Oracle', () => {
      crm.selectOption('Oracle');
      crm.typeCredentials(email, password);
    });

    it('when select Dynamics', () => {
      crm.selectOption('Dynamics');
      crm.typeCredentials(email, password);
    });

    afterEach(() => {
      expect(crm.saveButton.isEnabled()).toBe(true, 'Save Button should be enable');
      crm.saveButton.click();
    });
  });

  describe('choice a CRM and save user credentials', () => {
    const email = 'tenfold@tenfold.com';
    const password = '123456';

    it('with success', () => {
      crm.selectOption('Salesforce');
      crm.typeCredentials(email, password);
      expect(crm.saveButton.isEnabled()).toBe(true, 'Save Button should be enable');
      crm.saveButton.click();
    });

    it('when user fill incorrect email', () => {
      crm.selectOption('Zoho');
      crm.typeCredentials('email#teste.com', password);
      expect(crm.saveButton.isEnabled()).toBe(true, 'Save Button should be enable');
      crm.saveButton.click();
      expect(true).toBe(false, 'Should be display the message: Incorret email');
    });

    it('when password should e at least six chars long', () => {
      crm.selectOption('Salesforce');
      crm.typeCredentials(email, '12345');
      expect(crm.saveButton.isEnabled()).toBe(true, 'Save Button should be enable');
      crm.saveButton.click();
      expect(true).toBe(false, 'Should be display the message: Password should be at least six chars long');
    });

    it('when user not fill user and password', () => {
      crm.selectOption('Salesforce');
      crm.typeCredentials('', '');
      expect(crm.saveButton.isEnabled()).toBe(false, 'Save Button should not be enabled');
    });

  });

  afterEach(() => {
    helper.takeShot();
    nav.doLogout();
  });


});
