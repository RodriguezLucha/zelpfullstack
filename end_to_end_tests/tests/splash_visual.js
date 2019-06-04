module.exports = {
  'Zelp Visual' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline('body',  /* Optional */ 'custom-name', {threshold: 0.0}, 'VRT custom-name complete.')
      .end();
  }
};
