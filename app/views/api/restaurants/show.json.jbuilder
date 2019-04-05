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
    json.price_range '$$$$'
  end

  json.photo_url @restaurant.photos.map { |file| url_for(file) }
  json.average_stars @restaurant.reviews.average(:num_stars)
  json.total_reviews @restaurant.reviews.count
end

@restaurant.reviews.includes(:user, user: [photo_attachment: [:blob] ] ).each do |review|
  json.reviews do
    json.set! review.id do
      json.extract! review, :id, :user_id, :user_id, :num_stars, :content, :updated_at
    end
  end

  json.users do
    json.set! review.user.id do
      json.extract! review.user, :id, :email, :firstname, :lastname
      json.photo url_for(review.user.photo)
    end
  end
end
