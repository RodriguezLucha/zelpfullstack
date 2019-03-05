class CreateRestaurantStyles < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_styles do |t|
      t.integer :restuarant_id, null: false
      t.integer :style_id, null: false

      t.timestamps
    end
    add_index :restaurant_styles, [:restuarant_id, :style_id], :unique => true
  end
end
