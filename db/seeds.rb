require 'faker'
require 'json'
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

hundred_users = []
female_avatars = [16, 24, 37, 38, 49, 55, 58, 64, 80, 85, 87, 89]
(1..100).to_a.each do |i|
  firstname = Faker::Name.unique.male_first_name
  if female_avatars.include?(i)
    firstname = Faker::Name.unique.female_first_name
  end
  
  lastname = Faker::Name.unique.last_name
  email = Faker::Internet.unique.email
  password = 'password'

  user = User.create!(
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password
  )
  user.photo.attach(io: File.open("./seed/user_images/#{i}.jpg"), filename: "#{i}.jpg")
  hundred_users.push(user)
end


# Styles
json_from_file = File.read('./seed/seed.json')
seed_json = JSON.parse(json_from_file)
businesses = seed_json
styles = businesses.map do |restaurant|
  categories = []
  restaurant['categories'].map do |category|
    categories.push(category)
  end
  categories
end
styles = styles.flatten.uniq
style_map = {}
styles.each do |style|
  styleObj = Style.create!(style: style)
  styleKey = style.to_sym
  style_map[styleKey] = styleObj
end

def convert_price(dollars)
  if dollars == '$'
    return 1
  elsif dollars == '$$'
    return 2
  elsif dollars == '$$$'
    return 3
  elsif dollars == '$$$$'
    return 4
  else
    return 5
  end
end

user_counter = (1..Float::INFINITY).to_enum

businesses.each do |restaurant|

  restaurant_alias = restaurant["alias"]
  restaurant_sym = restaurant_alias.to_sym
  restaurant_obj = Restaurant.create!(

    name: restaurant["name"],
    state: restaurant["state"],
    zip: restaurant["zip"],
    address: restaurant["address"],
    city: restaurant["city"],
    website: restaurant["website"],
    price_range: convert_price(restaurant["price"]),
    lat: restaurant["lat"],
    lng: restaurant["lng"],
  )

  (0..2).each do |i|
    restaurant_obj.photos.attach(io: File.open("./seed/restaurant_images/#{restaurant_alias}/#{i}.jpg"), filename: "#{restaurant_alias}_#{i}.jpg")
  end

  restaurant['categories'].each do |style|
    RestaurantStyle.create!(
      restaurant_id: restaurant_obj.id, 
      style_id: style_map[style.to_sym].id
    )
  end

  restaurant['reviews'].each do |review|
    user_num = (user_counter.next % 100)
    Review.create!(
      restaurant_id: restaurant_obj.id, 
      user_id: hundred_users[user_num].id,
      num_stars: review["rating"],
      content: review["content"]
    )
  end
end
