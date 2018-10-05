# Tenfold CRM 
(https://hiptest.net/app/projects) [![Code Climate]

Funciontal tests for Tenfold QA Engineer Test

> App [(link)](https://qa-engineer-test.firebaseapp.com/)
> Test Management [(link)](https://hiptest.net/app/projects)

## Test Management credentials
email: tester@papito.io
password: 123456

The structure is based on three layers: features, steps and pages.

1. Features: Contains all the features of the project;
2. Steps: Contains all the steps implementations;
3. Pages: Contains all the pages in the website. A page must contain the declaration of all the elements of the page and the declaration of its actions.

## Pre Conditions

1. Node.js LTS (6.10.2)
2. Chromedriver

## Instalation

Install it as:

    $ npm install
    $ npm install -g protractor

## Usage

Too run tests in terminal, type:

```
  npn tests
  or
  protractor protractor.conf.js
```

To gerenate report (and clean the older one):

```
  npm report
  or
  allure generate --clean
```

## Reports

1. To see reports, open allure-report/index.html on firefox

## TODO

1. Run tests in CI
2. Add multibrowser
