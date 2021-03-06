module.exports = {
  'Zelp Title Present' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.containsText('.home_banner h1', 'Zelp');
  },
  'Top Rated Restaurants Present' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.containsText('.top_restaurants h1', 'Top Rated Restaurants');

    browser
      .expect.elements('.top_restaurant').count.to.equal(3);
  },
  'Footer present' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body');
    browser.expect.element('.footer').to.be.present;
  },
  'Zelp Visual' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline('body')
      .assert.screenshotIdenticalToBaseline('.top_restaurants')
      .assert.screenshotIdenticalToBaseline('.footer');
  }

};
