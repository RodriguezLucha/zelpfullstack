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

nancy_user = User.create!(
  firstname: 'Nancy',
  lastname: 'Kemper',
  email: 'nancy@gmail.com',
  password: 'password'
)
nancy_user.photo.attach(io: File.open('./app/assets/images/users/nancy.jpg'), filename: 'nancy.jpg')

oscar_user = User.create!(
  firstname: 'Oscar',
  lastname: 'Baker',
  email: 'oscar@gmail.com',
  password: 'password'
)
oscar_user.photo.attach(io: File.open('./app/assets/images/users/oscar.jpg'), filename: 'oscar.jpg')

toby_user = User.create!(
  firstname: 'Toby',
  lastname: 'Baumgartner',
  email: 'toby@gmail.com',
  password: 'password'
)
toby_user.photo.attach(io: File.open('./app/assets/images/users/toby.jpg'), filename: 'toby.jpg')



# Styles
vietnamese = Style.create!(style: 'Vietnamese')
bars = Style.create!(style: 'Bars')
grocery = Style.create!(style: 'Grocery')
oraganic_stores = Style.create!(style: 'Organic Stores')
steakhouses = Style.create!(style: 'Steakhouses')

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

# Texas Roadhouse
# 32115 Union Landing Blvd
# Union City, CA 94587
#  Get Directions
#  Phone number (510) 324-7623
#  Business websitetexasroadhouse.com
# 37.601412, -122.066521
texas_roadhouse = Restaurant.create!(
  name: 'Texas Roadhouse',
  state: 'California',
  zip: '94111',
  address: '32115 Union Landing Blvd',
  city: 'Union City',
  website: 'https://www.texasroadhouse.com',
  price_range: 1.0,
  lat: 37.601412,
  lng: -122.066521
)
texas_roadhouse.photos.attach(io: File.open('./app/assets/images/texas_roadhouse/beef.jpg'), filename: 'menu.jpg')
texas_roadhouse.photos.attach(io: File.open('./app/assets/images/texas_roadhouse/peanuts.jpg'), filename: 'garlic_noodles.jpg')
texas_roadhouse.photos.attach(io: File.open('./app/assets/images/texas_roadhouse/sweet_potato.jpg'), filename: 'shrip_salad.jpg')
RestaurantStyle.create!(restaurant_id: texas_roadhouse.id, style_id: steakhouses.id)
Review.create!(restaurant_id: texas_roadhouse.id, user_id: toby_user.id, num_stars: 5, content: 'Went to this establishment 3 months ago after a disappointing visit from the Fairfield location. I can say the food is great, the servers and bartending staff Joe, Christian, Sophie and Morgan are some great people. I\'ve been going back every Saturday like clock work. Love their hurricane margaritas, steaks and overall customer service. I would recommend this place to anyone that\'s seeking a great place to eat!')
Review.create!(restaurant_id: texas_roadhouse.id, user_id: oscar_user.id, num_stars: 5, content: 'Texas Roadhouse always satisfies my cravings for steak. I don\'t know why they don\'t have more locations open near by. Every time I come here I get steak but this time around I decided to try the prime rib. Once I took the first bite I was amazed at how good this prime rib was. I\'ve had prime rib before and I\'ve also had it at house of prime rib which is very popular, but I have to say this was so much better. It was amazing and kind of had a hint of sweet to it. I would also recommend the house salad I get it every time I come here. Also the chicken tenders are pretty good and if you have kids that would be a good choice to get them. The waiters are super friendly and go out of their way to make sure your happy with your meal.')
Review.create!(restaurant_id: texas_roadhouse.id, user_id: nelly_user.id, num_stars: 5, content: 'We went here during lunch for a friend\'s birthday. The wait was long, about an hour on a Sunday afternoon - around 11am for 8 people. We ordered the cactus blossom as our appetizer and 2 medium-rare prime rib 16 oz with sides of steak fries, butter corn, and fresh vegetables. The cactus blossom was good, but extremely heavy, we couldn\'t finish it so maybe just order 1 for your party! The prime rib was amazing and cooked perfectly. It was only $28 per 16oz too! Compared to other fancier places, this is definitely more worth it for the buck! Our server, Lisa was very nice and accommodating. It was a busy afternoon, and she made time to check on us often and to make sure everything was right. We would come back again, even though it\'s a pretty far drive from the city.')

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
RestaurantStyle.create!(restaurant_id: lucky_13.id, style_id: bars.id)
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
RestaurantStyle.create!(restaurant_id: pagan_idol.id, style_id: bars.id)
Review.create!(restaurant_id: pagan_idol.id, user_id: nelly_user.id, num_stars: 4, content: "This is an awesome Tiki bar near Fidi. There's a small room in the front but a huge space as you walk towards the back of the room. The bartenders are super friendly and give great drink recommendations. The drinks are also more reasonably priced than the Tonga room, which we where went went before coming here. I decided to get the banana life in a bowl ($30) which is about 3 cocktails worth. This was a refreshing fruity drink, with a good amount of booze. I also tried the toucan dance ($12) which is a creamy drink (from coconut) that's lighter on the booze. Both drinks were decorated beautiful and I'll definitely be coming back to try more drinks!")
Review.create!(restaurant_id: pagan_idol.id, user_id: betty_user.id, num_stars: 4, content: "Fun tiki bar!  It looks small from the entrance but goes back quite a bit.  There's lots of punch bowl type cocktails and fun seating arrangements, including little booths and with doorways.  Great place to come with a group of friends.  I had a daiquiri and my bf had the grapefruit daiquiri and they were both delicious.  Highly recommend!")
Review.create!(restaurant_id: pagan_idol.id, user_id: billy_user.id, num_stars: 4, content: "I seriously love Tiki Bars and this one has it all. Great drinks, awesome kitschy vibe, thematically appropriate music, and a clientele that clearly cares about these things. The night I went was a slow Tuesday but the whole place had a warm, friendly energy which led to in-depth talks with the bartenders and patrons.  A band played Hawaiian music towards the end of my time there and it really completed a perfect evening. Thanks, Pagan Idol. There are a lot of great choices in the Bay Area for Tiki but you're now my top choice!")
Review.create!(restaurant_id: pagan_idol.id, user_id: willy_user.id, num_stars: 5, content: "An awesome experience in Union Square! It is one of the biggest speakeasies I have ever seen in my life with multiple bars, dance floors, and seating areas! The drink selection is amazing. The bartenders here are friendly and extremely knowledgeable. This venue looks almost identical to Zombie Village, and that is partly because they are owned by the same company.")
Review.create!(restaurant_id: pagan_idol.id, user_id: oscar_user.id, num_stars: 4, content: "I seriously love Tiki Bars and this one has it all. Great drinks, awesome kitschy vibe, thematically appropriate music, and a clientele that clearly cares about these things. The night I went was a slow Tuesday but the whole place had a warm, friendly energy which led to in-depth talks with the bartenders and patrons.  A band played Hawaiian music towards the end of my time there and it really completed a perfect evening.")
Review.create!(restaurant_id: pagan_idol.id, user_id: toby_user.id, num_stars: 5, content: "Historically speaking, I am not a rum drinker, but I will make an exception for a super rad tiki bar on my last night in San Fransisco. This place is on point. Fleek? What do the kids say? Anyway, two drinks were most certainly enough for me. Pagan Love and Pagan Potion were my forms of worship that evening. Holy smokes, so delicious. Tiki drinks usually look good, but these drinks blew me out of the water. Pagan Love, enjoyed first, was rum, lime, orange, guava, papaya, and funk bass lines. That's right, delicious they were, those funk bass lines. The sweetness and citrus was balanced perfectly. As far as the Pagan Potion goes, it has me at Chartreuse. It was herbal and coconut-y... Freaking delicious.")
