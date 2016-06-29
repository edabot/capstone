class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :ingredients, null: false
      t.text :instructions, null: false
      t.integer :cook_time
      t.integer :oven_temp
      t.string :image_url
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :recipes, :user_id
  end
end
