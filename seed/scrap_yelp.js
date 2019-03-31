const axios = require('axios');
const cheerio = require('cheerio');

const getData = html =>{
  let websiteUrl = '';
  const $ = cheerio.load(html);
  $('.biz-website a').each((i, elem) => {
    websiteUrl = $(elem).text();
  });
  return websiteUrl;
};


async function scrapeYelp() {
  let url = 'https://www.yelp.com/biz/noodle-time-san-francisco-2';
  let result = await axios.get(url)
    .then(response => {
      let businessSite = getData(response.data);
      console.log(businessSite);
      return businessSite;
    })
    .catch(error => {
      console.log('Error:', error);
    });
  return result;
}

module.exports = scrapeYelp;