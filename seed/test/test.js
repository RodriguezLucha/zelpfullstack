const faker = require('faker');
const expect = require('chai').expect;

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