const YelpAPI = require('./scrape_yelp');
const downloadImage = require('./image_downloader');
const fs = require('fs');


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
  let alias = business.alias;

  if (alias === 'la-mar-cebichería-peruana-san-francisco-4'
    || alias === 'seapot-海中锅-san-mateo'
    || alias === 'café-capistrano-half-moon-bay-2'
    || alias === 'caffé-mezzaluna-half-moon-bay'
  ) {
    return '';
  }

  // let apiUrl = `https://api.yelp.com/v3/businesses/${business.alias}`;
  // let photos = await YelpAPI.getPhotos(apiUrl);
  // savePhotos(alias, photos);

  let liveUrl = `https://www.yelp.com/biz/${business.alias}`;
  let [website, reviews] = await YelpAPI.getWebsiteAndReviews(liveUrl);


  return {
    name,
    state,
    zip,
    address,
    city,
    website,
    price,
    lat,
    lng,
    // photos,
    categories,
    reviews
  };
}

async function savePhotos(alias, photos) {
  for (let i = 0; i < photos.length; i++) {
    const photoUrl = photos[i];

    let dir = `restaurant_images/${alias}`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    let image_path = `${dir}/${i}.jpg`.toLowerCase();
    downloadImage(photoUrl, image_path);
  }
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
