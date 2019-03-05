class EditRestaurantStyles < ActiveRecord::Migration[5.2]
  def change
    rename_column :restaurant_styles, :restuarant_id, :restaurant_id
  end
end
