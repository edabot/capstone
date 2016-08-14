class Recipe < ActiveRecord::Base
  validates :title, :description, :ingredients, :instructions, :user_id, presence: true

  belongs_to :user
  has_many :comments
  has_many :likes
  has_many :likers,
    through: :likes,
    source: :user
  has_many :taggings
  has_many :tags,
  through: :taggings,
  source: :tag

  belongs_to :parent_recipe,
    foreign_key: :parent_recipe_id,
    primary_key: :id,
    class_name: "Recipe"
  has_many :forked_recipes,
    foreign_key: :parent_recipe_id,
    primary_key: :id,
    class_name: "Recipe"
end
