
@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :city
    case restaurant.price_range
    when 0..1
      json.price_range "$"
    when 1..2
      json.price_range "$$"
    when 2..3
      json.price_range "$$$"
    when 3..4
      json.price_range "$$$$"
    when 4..5
      json.price_range "$$$$$"
    end
    json.styles restaurant.styles.map { |style| style.style }
    json.photo url_for(restaurant.photos.first)
    
    json.review do
      json.extract! restaurant.reviews.first, :content
      json.author restaurant.reviews.first.user.firstname
    end
    json.average_stars restaurant.reviews.average(:num_stars)
  end
end
