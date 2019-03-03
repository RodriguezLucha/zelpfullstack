json.array! @restaurants do |restaurant|
  json.restaurant restaurant
  json.photoUrls restaurant.photos.map { |file| url_for(file) }
end
