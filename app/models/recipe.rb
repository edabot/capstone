class Recipe < ActiveRecord::Base
  validates :title, :description, :ingredients, :instructions, :user_id, presence: true

  belongs_to :user
  has_many :comments
  has_many :likes

end
