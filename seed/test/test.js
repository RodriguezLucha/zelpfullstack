const faker = require('faker');
const expect = require('chai').expect;
const downloadImage = require('../image_downloader');
const Path = require('path');

describe('Faker', () => {
  describe('test basic API', () => {
    it('should return -1 when the value is not present', () => {
      let firstName = faker.name.firstName();
      let lastName = faker.name.lastName();
      let randomEmail = faker.internet.email();
      let randomAvatar = faker.image.avatar();

      expect(firstName).to.be.a('string');
      expect(lastName).to.be.a('string');
      expect(randomEmail).to.be.a('string');
      expect(randomAvatar).to.be.a('string');
    });
  });
});

describe('Download', () => {
  describe('test downloading a file with js', () => {
    it('should download a file successfully', () => {
      let url = 'https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg';
      const path = Path.resolve(__dirname, 'images', '128.jpg');
      downloadImage(url, path);
    });
  });
});