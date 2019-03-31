const osmosis = require('osmosis');

const extractBusinessData = (business) => {
  let name = business.name;
  let state = business.location.state;
  let zip = business.location.zip_code;
  let city = business.location.city;
  let address = business.location.address1;

  // const url = 'https://www.yelp.com/biz/noodle-time-san-francisco-2';

  return {
    name,
    state,
    zip,
    address,
    city,
    website
  };
};

module.exports = extractBusinessData;