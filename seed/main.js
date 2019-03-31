
const extractBusinessData = require('./util');
const fs = require('fs');

async function main(){
  const contents = fs.readFileSync('response.json');
  let jsonContent = JSON.parse(contents);

  //for(let i = 0; i < jsonContent.businesses.length; i++){
  for(let i = 0; i < 1; i++){
    let singleBusiness = jsonContent.businesses[i];
    let businessData = await extractBusinessData(singleBusiness);
    console.log(businessData);
  }
}

main();