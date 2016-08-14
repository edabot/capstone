class NewRecipeColumn < ActiveRecord::Migration
  def change
    add_column :recipes, :parent_recipe_id, :integer
    add_column :recipes, :published, :boolean
  end
end
