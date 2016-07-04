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
end
