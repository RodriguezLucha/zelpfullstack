const YelpAPI = require('./scrape_yelp');

async function extractBusinessData(business) {
  let name = business.name;
  let state = business.location.state;
  let zip = business.location.zip_code;
  let city = business.location.city;
  let address = business.location.address1;
  let price = business.price;
  let lat = business.coordinates.latitude;
  let lng = business.coordinates.longitude;
  let categories = business.categories.map(c => c.title);

  // let liveUrl = `https://www.yelp.com/biz/${business.alias}`;
  // let website = await YelpAPI.getWebsite(liveUrl);

  // let apiUrl = `https://api.yelp.com/v3/businesses/${business.alias}`;
  // let photos = await YelpAPI.getPhotos(apiUrl);

  // let liveUrl = `https://www.yelp.com/biz/${business.alias}`;
  // let reviews = await YelpAPI.getReviews(liveUrl);

  return {
    name,
    state,
    zip,
    address,
    city,
    // website,
    price,
    lat,
    lng,
    // photos,
    categories
    // reviews
  };
}

module.exports = extractBusinessData;

// Things needed
//  List of restaurant styles     //DONE
//  Name of restaurant            //DONE
//  State                         //DONE
//  Zip                           //DONE
//  Address                       //DONE
//  City                          //DONE
//  Website                       //DONE
//  Price Range                   //DONE
//  Lat                           //DONE
//  Lng                           //DONE                         
//  Photo 1                       //DONE
//  Photo 2                       //DONE
//  Photo 3                       //DONE
//  Review 1, 2, 3, 4, 5          //DONE