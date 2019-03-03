# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
# Restaurant.delete_all

User.create!(
  firstname: 'Test',
  lastname: 'Tester',
  email: 'test@test.com',
  password: 'password'
)

# 605 Battery St
# San Francisco, CA 94111
# b/t Jackson St & Pacific Ave 
# Financial District
# 37.796996, -122.400881

Restaurant.create!(
  name: 'Noodle Time',
  state: 'California',
  zip: '94111',
  address: '605 Battery St',
  city: 'San Francisco',
  website: 'https://noodletimesf.com/',
  price_range: 1.0,
  lat: 37.796996,
  lng: -122.400881
)