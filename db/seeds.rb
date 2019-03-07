# frozen_string_literal: true

User.delete_all
Restaurant.delete_all
Style.delete_all
RestaurantStyle.delete_all
Review.delete_all

# Demo user
demo_user = User.create!(
  firstname: 'Test',
  lastname: 'Tester',
  email: 'test@test.com',
  password: 'password'
)
billy_user = User.create!(
  firstname: 'Billy',
  lastname: 'Smith',
  email: 'billy@gmail.com',
  password: 'password'
)
willy_user = User.create!(
  firstname: 'Willy',
  lastname: 'Johnson',
  email: 'willy@gmail.com',
  password: 'password'
)
nelly_user = User.create!(
  firstname: 'Nelly',
  lastname: 'Williams',
  email: 'nelly@gmail.com',
  password: 'password'
)

# Styles
vietnamese = Style.create!(style: 'Vietnamese')
dive_bars = Style.create!(style: 'Dive Bars')
grocery = Style.create!(style: 'Grocery')
oraganic_stores = Style.create!(style: 'Organic Stores')

# Noodle time
# 605 Battery St
# San Francisco, CA 94111
# 37.796996, -122.400881
noodle_time = Restaurant.create!(
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
noodle_time.photos.attach(io: File.open('./app/assets/images/noodle_time/menu.jpg'), filename: 'menu.jpg')
noodle_time.photos.attach(io: File.open('./app/assets/images/noodle_time/garlic_noodles.jpg'), filename: 'garlic_noodles.jpg')
noodle_time.photos.attach(io: File.open('./app/assets/images/noodle_time/shrimp_salad.jpg'), filename: 'shrip_salad.jpg')
RestaurantStyle.create!(restaurant_id: noodle_time.id, style_id: vietnamese.id)
Review.create!(restaurant_id: noodle_time.id, user_id: billy_user.id, num_stars: 5, content: 'I ordered Pho Noodle soup. It was the amazing noodle soup with affordable price. Definitely, I will come back again!')
Review.create!(restaurant_id: noodle_time.id, user_id: willy_user.id, num_stars: 5, content: 'Amazing shrimp garlic noodles! Recommend! The food that I got was good for the price I paid!')

# Lucky 13
# 2140 Market St
# San Francisco, CA 94114
# 37.767050, -122.429663
lucky_13 = Restaurant.create!(
  name: 'Lucky 13',
  state: 'California',
  zip: '94114',
  address: '2140 Market St',
  city: 'San Francisco',
  website: '',
  price_range: 1.0,
  lat: 37.767050,
  lng: -122.429663
)
lucky_13.photos.attach(io: File.open('./app/assets/images/lucky_13/bar.jpg'), filename: 'bar.jpg')
lucky_13.photos.attach(io: File.open('./app/assets/images/lucky_13/cash_only.jpg'), filename: 'cash_only.jpg')
lucky_13.photos.attach(io: File.open('./app/assets/images/lucky_13/cat.jpg'), filename: 'cat.jpg')
RestaurantStyle.create!(restaurant_id: lucky_13.id, style_id: dive_bars.id)
Review.create!(restaurant_id: lucky_13.id, user_id: billy_user.id, num_stars: 4, content: "My favorite dive bar -- It's like the SF I remember from when I moved here in the early 90's, before both tech booms, before rampant gentrification.  Great beer selection, people and the occasional dog.")

# Whole Foods Market Steep Brew
# 450 Rhode Island St
# San Francisco, CA 94107
# 37.764803, -122.402847
steep_brew = Restaurant.create!(
  name: 'Whole Foods Market Steep Brew',
  state: 'California',
  zip: '94111',
  address: '605 Battery St',
  city: 'San Francisco',
  website: 'https://noodletimesf.com/',
  price_range: 1.0,
  lat: 37.764803,
  lng: -122.402847
)
steep_brew.photos.attach(io: File.open('./app/assets/images/steep_brew/burger.jpg'), filename: 'burger.jpg')
steep_brew.photos.attach(io: File.open('./app/assets/images/steep_brew/game.jpg'), filename: 'game.jpg')
steep_brew.photos.attach(io: File.open('./app/assets/images/steep_brew/menu.jpg'), filename: 'menu.jpg')
RestaurantStyle.create!(restaurant_id: steep_brew.id, style_id: oraganic_stores.id)
RestaurantStyle.create!(restaurant_id: steep_brew.id, style_id: grocery.id)
Review.create!(restaurant_id: steep_brew.id, user_id: willy_user.id, num_stars: 5, content: "Food is great and tons of space. Not a bad place to do work either with their free WiFi. However, the set up of ordering and receiving food is bad. Your order food from one room and pick it up from another. It's hard to hear when you're food is ready. Especially when wait times for food can take up to 30+ minutes. Great quality food tho.")
Review.create!(restaurant_id: steep_brew.id, user_id: nelly_user.id, num_stars: 1, content: "I was not a fan.")
