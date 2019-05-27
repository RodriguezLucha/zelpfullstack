require "application_system_test_case"

class HomePagesTest < ApplicationSystemTestCase
  test "Visit the Zelp home page" do
    visit root_url
    assert_selector "h1", text: "Zelp"
  end
end
