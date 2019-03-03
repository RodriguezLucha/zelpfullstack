class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :website
      t.float :price_range, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps
    end
  end
end
