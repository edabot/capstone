class Like < ActiveRecord::Base
  validates :user_id, :recipe_id, presence: true

  belongs_to :user
  belongs_to :recipe

end
