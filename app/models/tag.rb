class Tag < ActiveRecord::Base
validates :name, presence: true

has_many :taggings
has_many :recipes,
through: :taggings,
source: :recipe

end
