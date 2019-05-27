require "application_system_test_case"

class HomePagesTest < ApplicationSystemTestCase
  test "Visit the Zelp home page" do
    visit root_url
    assert_selector "h1", text: "Zelp"
  end

  test "Visit the login page" do
    visit root_url + "#/login"
    assert_selector "h1", text: "Log In to Zelp"
  end
end
