
const extractBusinessData = require('./util');
const fs = require('fs');

async function main() {
  const contents = fs.readFileSync('sf_data.json');
  let jsonContent = JSON.parse(contents);
  let businesses = jsonContent.businesses;

  for (let i = 0; i < businesses.length; i++) {
    let singleBusiness = businesses[i];
    let businessData = await extractBusinessData(singleBusiness);
    console.log(i);
  }
}

main();