class CreateStyles < ActiveRecord::Migration[5.2]
  def change
    create_table :styles do |t|
      t.string :style, null: false

      t.timestamps
    end
    add_index :styles, :style, unique: true
  end
end
