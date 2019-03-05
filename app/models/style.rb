# == Schema Information
#
# Table name: styles
#
#  id         :bigint(8)        not null, primary key
#  style      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Style < ApplicationRecord
  validates :style, presence: :true

  has_many :restaurant_styles

  has_many :restaurants,
    through: :restaurant_styles,
    source: :restaurant
end
