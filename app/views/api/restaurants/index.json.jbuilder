
@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :city, :price_range
    json.photo url_for(restaurant.photos.first)
  end
end
