# == Schema Information
#
# Table name: restaurants
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  state       :string           not null
#  zip         :string           not null
#  address     :string           not null
#  city        :string           not null
#  website     :string
#  price_range :float            not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, :state, :zip, :address, :city, :price_range, :lat, :lng, presence: true

  has_many_attached :photos

  has_many :restaurant_styles

  has_many :styles,
    through: :restaurant_styles,
    source: :style

end
