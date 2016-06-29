class Recipe < ActiveRecord::Base
  validates :title, :description, :ingredients, :instructions, :user_id, presence: true

  belongs_to :user

end
