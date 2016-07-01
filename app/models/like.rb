class Like < ActiveRecord::Base
  validates :user_id, uniqueness: {scope: :recipe_id}

  belongs_to :user
  belongs_to :recipe

end
