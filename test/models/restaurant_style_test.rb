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

require 'test_helper'

class RestaurantStyleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
