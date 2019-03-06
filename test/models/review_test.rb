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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
