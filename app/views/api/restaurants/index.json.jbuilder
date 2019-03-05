
@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :city
    json.styles restaurant.styles.map { |style| style.style }
    json.photo url_for(restaurant.photos.first)
  end
end
