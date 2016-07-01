class Comment < ActiveRecord::Base
  validates :user_id, :recipe_id, :comment, presence: true

  belongs_to :user
  belongs_to :recipe

end
