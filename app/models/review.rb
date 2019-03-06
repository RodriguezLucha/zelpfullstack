# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  restaurant_id :integer
#  user_id       :integer
#  num_stars     :integer
#  content       :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :restaurant_id, :user_id, :num_stars, :content, presence: :true
  validates :num_stars, :inclusion => 1..5

  belongs_to :user
  belongs_to :restaurant
end
