module.exports = {
  'Login Page' : function (browser) {
    browser
      .url('http://localhost:3000/#/login')
      .waitForElementVisible('body');

    browser.expect.element('input[type=text]').to.be.present;
  },
  'Login Page Visual' : function (browser) {
    browser
      .url('http://localhost:3000/#/login')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline('body')
      .assert.screenshotIdenticalToBaseline('.footer');
  }

};
