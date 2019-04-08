json.review do
  json.id @review.id
  json.user_id @review.user_id
  json.num_stars = @review.num_stars
  json.content = @review.content
end