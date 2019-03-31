
// const keys = require('../config/yelp_app');
const extractBusinessData = require('./util');
const osmosis = require('osmosis');
const scrapeYelp = require('./scrap_yelp');

const fs = require('fs');
const contents = fs.readFileSync('response.json');
// Define to JSON type
let jsonContent = JSON.parse(contents);
let singleBusiness = jsonContent.businesses[4];

//console.log(singleBusiness);
// console.log('Result:', extractBusinessData(singleBusiness));
// Get Value from JSON

//Things needed
// List of restaurant styles
//  Name of restaurant            //DONE
//  State                         //DONE
//  Zip                           //DONE
//  Address                       //DONE
//  City                          //DONE
//  Website
//  Price Range
//  Lat
//  Lng
//  Photo 1
//  Photo 2
//  Photo 3
//  Review 1, 2, 3, 4, 5

let businessWebsite = scrapeYelp();
console.log('business website', businessWebsite);