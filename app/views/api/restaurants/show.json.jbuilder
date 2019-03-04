json.extract! @restaurant, :id, :name, :state, :zip, :address, :city, :website, :price_range, :lat, :lng

case @restaurant.price_range
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

json.photo_url @restaurant.photos.map { |file| url_for(file) }