# == Schema Information
#
# Table name: restaurant_styles
#
#  id            :bigint(8)        not null, primary key
#  restaurant_id :integer          not null
#  style_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class RestaurantStyle < ApplicationRecord
  validates :restaurant_id, :style_id, presence: :true
  validates :restaurant_id, uniqueness: { scope: :style_id }

  belongs_to :style
  belongs_to :restaurant
end
