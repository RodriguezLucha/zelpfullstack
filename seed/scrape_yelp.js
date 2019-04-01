const axios = require('axios');
const cheerio = require('cheerio');
const keys = require('../config/yelp_app');

const parseWebsite = html => {
  let websiteUrl = '';
  const $ = cheerio.load(html);
  $('.biz-website a').each((i, elem) => {
    websiteUrl = $(elem).text();
  });
  return websiteUrl;
};

async function getWebsite(url) {
  let result = await axios.get(url)
    .then(response => {
      let businessSite = parseWebsite(response.data);
      return businessSite;
    });
  return result;
}

async function getPhotos(url) {
  let result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${keys.APIkey}`
    }
  })
    .then(response => response.data.photos)
    .catch(() => console.log('Failed:', url));
  return result;
}


const parseReviews = html => {
  let reviews = [];
  const $ = cheerio.load(html);
  $('.review-content p').slice(0, 3).each((i, elem) => {
    const review = $(elem).text();
    reviews.push(review);
  });
  return reviews;
};

async function getReviews(url) {
  let result = await axios.get(url)
    .then(response => {
      let reviews = parseReviews(response.data);
      return reviews;
    });
  return result;
}

async function getWebsiteAndReviews(url) {
  let result = await axios.get(url)
    .then(response => {
      let reviews = parseReviews(response.data);
      let website = parseWebsite(response.data);
      return [website, reviews];
    });
  return result;
}

module.exports.getWebsite = getWebsite;
module.exports.getPhotos = getPhotos;
module.exports.getReviews = getReviews;
module.exports.getWebsiteAndReviews = getWebsiteAndReviews;


