const faker = require('faker');
const downloadImage = require('./image_downloader');


const extractBusinessData = require('./util');
const fs = require('fs');

async function main() {
  //const users = generateUsers();
  readRestaurantData();
}

async function generateUsers() {
  const users = [];
  for (let i = 1; i <= 100; i++) {
    let avatar = faker.image.avatar();
    let image_path = `user_images/${i}.jpg`.toLowerCase();
    downloadImage(avatar, image_path);
    users.push({
      avatar,
      image_path
    });
  }

  return users;
}

async function readRestaurantData() {
  const contents = fs.readFileSync('combo_data.json');
  let jsonContent = JSON.parse(contents);
  let businesses = jsonContent.businesses;

  let parsedObjects = [];

  for (let i = 0; i < 1; i++) {
    // for (let i = 0; i < businesses.length; i++) {
    let singleBusiness = businesses[i];
    let businessData = await extractBusinessData(singleBusiness);
    if (businessData !== '') {
      parsedObjects.push(businessData);
    }
  }

  fs.writeFile('seed.json', JSON.stringify(parsedObjects, null, 4), (err) => {
    if (err) console.error(err);
  });
}

main();

// Failed: https://api.yelp.com/v3/businesses/la-mar-cebichería-peruana-san-francisco-4
// Failed: https://api.yelp.com/v3/businesses/seapot-海中锅-san-mateo
// Failed: https://api.yelp.com/v3/businesses/café-capistrano-half-moon-bay-2
// Failed: https://api.yelp.com/v3/businesses/caffé-mezzaluna-half-moon-bay