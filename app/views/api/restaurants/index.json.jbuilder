# {
#   1: {
#         id: 1,
#         name: 'Steaks R Us',
#         address: '823 Steak Drive',
#         city: 'San Francisco',
#         priceRange: '3.4',
#   }
# }

# json.array! @restaurants do |restaurant|
#   json.set! restaurant.id
  # json.restaurant restaurant
  # json.photoUrls restaurant.photos.map { |file| url_for(file) }
# end


@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :address, :city, :price_range
  end
end


  # json.set! poke.id do
  #   json.extract! poke, :id, :name
  #   json.image_url asset_path(poke.image_url)
  # end