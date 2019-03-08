# Zelp
Clone of [Yelp](https://www.yelp.com/), for demonstration purposes only.


## Live
* [Live](https://rudyzelp.herokuapp.com/#/)

* [Wiki](https://github.com/RodriguezLucha/zelpfullstack/wiki)

## Technologies Used

* React & Redux (frontend)
* Ruby on Rails (backend)

## Key features

* User authentication. Sign up, Log in, Log out, demo user.

![splash](https://github.com/RodriguezLucha/zelpfullstack/raw/master/screenshots/splash.png)

* Viewing information about a specific Restaurant, including reviews.

* Searching for a restaurant based on name or category.

![search](https://github.com/RodriguezLucha/zelpfullstack/raw/master/screenshots/search.png)


## Fun Code Snippets

I really liked the declarative style of CSS grid! Here is a small snippet to show off how easy it is to work with grid-template areas. Inside of `restaurant_show.scss`:

```css
.single_restaurant {
  width: 960;
  height: 443;
  background-color: $my-gray;
  display: grid;
  grid-template-areas:
    "left          info     info     review   right"
    "left          map      images   images   right"
    "left_reviews  reviews  reviews  reviews  right_reviews";

  grid-template-columns: 1fr auto auto auto 1fr;
  grid-template-rows: auto auto auto;
}
```

I was also very impressed with how easy Rails makes it to switch where you images are served from depending on the environment. With this few lines of configuration image links point to Amazon S3 when running on Heroku and are served from localhost when running in development. 

`storage.yml`
```yml
local:
  service: Disk
  root: <%= Rails.root.join("storage") %>
  
amazon_prod:
  service: S3
  access_key_id: <%= Rails.application.credentials.aws[:access_key_id] %>
  secret_access_key: <%= Rails.application.credentials.aws[:secret_access_key] %>
  region: <%= Rails.application.credentials.aws[:region] %>
  bucket: <%= Rails.application.credentials.aws[:prod][:bucket] %>
```

`production.rb`
```ruby
config.active_storage.service = :amazon_prod
```
`development.rb`
```ruby
config.active_storage.service = :local
```

(Seeding works exactly the same for both cases)

`seeds.rb`
```
texas_roadhouse.photos.attach(io: File.open('./app/assets/images/texas_roadhouse/beef.jpg'), filename: 'menu.jpg')
texas_roadhouse.photos.attach(io: File.open('./app/assets/images/texas_roadhouse/peanuts.jpg'), filename: 'garlic_noodles.jpg')
texas_roadhouse.photos.attach(io: File.open('./app/assets/images/texas_roadhouse/sweet_potato.jpg'), filename: 'shrip_salad.jpg')
```

## Future Direction
* Full CRUD of user reviews. Currently only has the Read part implemented.

* Google Maps integration. 
