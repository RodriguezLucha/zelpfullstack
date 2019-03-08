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
billy_user.photo.attach(io: File.open('./app/assets/images/users/billy.jpg'), filename: 'billy.jpg')

willy_user = User.create!(
  firstname: 'Willy',
  lastname: 'Johnson',
  email: 'willy@gmail.com',
  password: 'password'
)
willy_user.photo.attach(io: File.open('./app/assets/images/users/willy.jpg'), filename: 'willy.jpg')

nelly_user = User.create!(
  firstname: 'Nelly',
  lastname: 'Williams',
  email: 'nelly@gmail.com',
  password: 'password'
)
nelly_user.photo.attach(io: File.open('./app/assets/images/users/nelly.jpg'), filename: 'nelly.jpg')

betty_user = User.create!(
  firstname: 'Betty',
  lastname: 'Jones',
  email: 'betty@gmail.com',
  password: 'password'
)
betty_user.photo.attach(io: File.open('./app/assets/images/users/betty.jpg'), filename: 'betty.jpg')


# Styles
vietnamese = Style.create!(style: 'Vietnamese')
dive_bars = Style.create!(style: 'Dive Bars')
grocery = Style.create!(style: 'Grocery')
oraganic_stores = Style.create!(style: 'Organic Stores')
tiki_bars = Style.create!(style: 'Tiki Bars')

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
  name: 'Whole Foods Steep Brew',
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


# Pagan Idol
# 375 Bush St
# San Francisco, CA 94104
# b/t Belden Pl & Trinity Pl 
# Financial District
# 37.790837, -122.403536
pagan_idol = Restaurant.create!(
  name: 'Pagan Idol',
  state: 'California',
  zip: '94104',
  address: '375 Bush St',
  city: 'San Francisco',
  website: 'https://www.paganidol.com/',
  price_range: 2.0,
  lat: 37.790837,
  lng: -122.403536
)
pagan_idol.photos.attach(io: File.open('./app/assets/images/pagan_idol/banana_life.jpg'), filename: 'burger.jpg')
pagan_idol.photos.attach(io: File.open('./app/assets/images/pagan_idol/bar.jpg'), filename: 'game.jpg')
pagan_idol.photos.attach(io: File.open('./app/assets/images/pagan_idol/rum_monkey.jpg'), filename: 'menu.jpg')
RestaurantStyle.create!(restaurant_id: pagan_idol.id, style_id: tiki_bars.id)
Review.create!(restaurant_id: pagan_idol.id, user_id: nelly_user.id, num_stars: 4, content: "This is an awesome Tiki bar near Fidi. There's a small room in the front but a huge space as you walk towards the back of the room. The bartenders are super friendly and give great drink recommendations. The drinks are also more reasonably priced than the Tonga room, which we where went went before coming here. I decided to get the banana life in a bowl ($30) which is about 3 cocktails worth. This was a refreshing fruity drink, with a good amount of booze. I also tried the toucan dance ($12) which is a creamy drink (from coconut) that's lighter on the booze. Both drinks were decorated beautiful and I'll definitely be coming back to try more drinks!")
Review.create!(restaurant_id: pagan_idol.id, user_id: betty_user.id, num_stars: 4, content: "Fun tiki bar!  It looks small from the entrance but goes back quite a bit.  There's lots of punch bowl type cocktails and fun seating arrangements, including little booths and with doorways.  Great place to come with a group of friends.  I had a daiquiri and my bf had the grapefruit daiquiri and they were both delicious.  Highly recommend!")
Review.create!(restaurant_id: pagan_idol.id, user_id: billy_user.id, num_stars: 4, content: "I seriously love Tiki Bars and this one has it all. Great drinks, awesome kitschy vibe, thematically appropriate music, and a clientele that clearly cares about these things. The night I went was a slow Tuesday but the whole place had a warm, friendly energy which led to in-depth talks with the bartenders and patrons.  A band played Hawaiian music towards the end of my time there and it really completed a perfect evening. Thanks, Pagan Idol. There are a lot of great choices in the Bay Area for Tiki but you're now my top choice!")
Review.create!(restaurant_id: pagan_idol.id, user_id: willy_user.id, num_stars: 5, content: "An awesome experience in Union Square! It is one of the biggest speakeasies I have ever seen in my life with multiple bars, dance floors, and seating areas! The drink selection is amazing. The bartenders here are friendly and extremely knowledgeable. This venue looks almost identical to Zombie Village, and that is partly because they are owned by the same company.")
