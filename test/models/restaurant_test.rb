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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
