'use strict';

const Helper = require('../helper');
const Navbar = require('../pages/nav.po.js');
const Login = require('../pages/login.po.js');
const CRMSetup = require('../pages/crmSetup.po.js');

describe('CRM Login', () => {
  const helper = new Helper();
  const nav = new Navbar();
  const login = new Login();
  const crm = new CRMSetup();

  beforeEach(() => {
    login.go();
  });

  it('successfully login', () => {
    login.with('tenfold@tenfold.com', '123456');
    expect(crm.app.isPresent()).toBe(true, 'CRM Setup page is not visible');
  });

  it('when user fill incorrect password', () => {
    login.with('tenfold@tenfold.com', 'xpto');
    expect(login.message.getText()).toEqual('Invalid password');
  });

  it('when user not registered', () => {
    login.with('user@404.com', 'xpto');
    expect(login.message.getText()).toEqual('User not registered. Please Sign up');
  });

  it('when user not fill e-email', () => {
    login.with('', 'xpto');
    expect(login.message.getText()).toEqual('Please enter your e-mail');
  });

  it('when user not fill password', () => {
    login.with('tenfold@tenfold.com', '');
    expect(login.message.getText()).toEqual('Please enter your password');
  });

  it('when user not fill user and password', () => {
    login.with('', '');
    expect(login.message.getText()).toEqual('Please enter your e-mail and password');
  });

  it('when password should e at least six chars long', () => {
    login.with('tenfold@tenfold.com', '12345');
    expect(login.message.getText()).toEqual('Password should be at least six chars long');
  });

  afterEach(() => {
    helper.takeShot();
    nav.doLogout();
  });

});
