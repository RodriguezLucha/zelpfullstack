json.extract! @restaurant, :id, :name, :state, :zip, :address, :city, :website, :price_range, :lat, :lng
json.photo_url @restaurant.photos.map { |file| url_for(file) }
