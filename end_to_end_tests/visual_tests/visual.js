module.exports = {
  'Home page' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('.top_restaurants')
      .assert.screenshotIdenticalToBaseline('body', 'home')
      .assert.screenshotIdenticalToBaseline('.top_restaurants')
      .assert.screenshotIdenticalToBaseline('.footer');
  },
  'Login page' : function (browser) {
    browser
      .url('http://localhost:3000/#/login')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline('body', 'login');
  },
  'Single Restaurant' : function (browser) {
    browser
      .url('http://localhost:3000/#/restaurant/1')
      .waitForElementVisible('.single_restaurant')
      .assert.screenshotIdenticalToBaseline('body', 'single_restaurant');
  },
  'Write a Review' : function (browser) {
    browser
      .url('http://localhost:3000/#/restaurant/1/review')
      .waitForElementVisible('body')
      .assert.screenshotIdenticalToBaseline('body', 'write_a_review');
  },

};
