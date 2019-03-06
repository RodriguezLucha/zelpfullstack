class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id
      t.integer :user_id
      t.integer :num_stars
      t.text :content

      t.timestamps
    end
    add_index :reviews, [:restaurant_id, :user_id], :unique => true
  end
end
