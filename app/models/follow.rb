class Follow < ActiveRecord::Base
  validates :leader_id, :follower_id, presence: true

  belongs_to :leader,
    class_name: "User",
    foreign_key: "leader_id"

  belongs_to :follower,
    class_name: "User",
    foreign_key: "follower_id"
end
