json.restaurant do
  json.extract! @restaurant, :id, :name, :state, :zip, :address, :city, :website, :price_range, :lat, :lng
  json.styles @restaurant.styles.map(&:style)
  json.review_ids @restaurant.reviews.pluck(:id)

  # TODO: extract to partial
  case @restaurant.price_range
  when 0..1
    json.price_range '$'
  when 1..2
    json.price_range '$$'
  when 2..3
    json.price_range '$$$'
  when 3..4
    json.price_range '$$$$'
  when 4..5
    json.price_range '$$$$$'
  end

  json.photo_url @restaurant.photos.map { |file| url_for(file) }
end

@restaurant.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :content
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :email
    end
  end
end
